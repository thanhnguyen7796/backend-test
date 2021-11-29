import express, {Request} from 'express';

const app = express();
import {json} from 'body-parser';

import { IssueModel, UserModel, CategoriesIssueModel, OrganizationsModel } from '../models/db';
import { Sequelize, Op } from 'sequelize';
import { sortBy } from 'lodash';
const jsonParser = json()


const EMPLOYEE_ROLE_ID = 1;
const CUSTOMER_ROLE_ID = 2;
const ROLE_NAMES = {
    [EMPLOYEE_ROLE_ID]: 'employee',
    [CUSTOMER_ROLE_ID]: 'customer'
}
const HOT_DESK_ISSUE_ID = 4;
const MEETING_ROOMS_ISSUE_ID = 5;
const PARKING_ISSUE_ID = 6;
const PHONE_BOOTHS_ISSUE_ID = 7;

const CATEGORY_NAMES = {
    [HOT_DESK_ISSUE_ID]: 'hotDesk',
    [MEETING_ROOMS_ISSUE_ID]: 'meetingRooms',
    [PARKING_ISSUE_ID]: 'parking',
    [PHONE_BOOTHS_ISSUE_ID]: 'phoneBooths',
}



app.post('/issues-reported-overview', jsonParser, async ({body}: Request<{}, {}, {
    currentStartDate: string;
    currentEndDate: string;
    previousStartDate: string;
    previousEndDate: string;
}, {}>, res) => {
    try {
        const {
            currentStartDate,
            currentEndDate,
            previousStartDate,
            previousEndDate
        } = body;
        
        const itemsByRoles: any = await IssueModel.count({
            group: [`${UserModel.name}.roleId`, 'reportMoment'],
            attributes: [
                [Sequelize.literal(`CASE when ${IssueModel.name}.createdAt between "${currentStartDate}" and "${currentEndDate}" then "current" when ${IssueModel.name}.createdAt between "${previousStartDate}" and "${previousEndDate}" then "previous" END`), 'reportMoment'],
            ],
            include: [
                {
                    model: UserModel,
                    required: true,
                    where: {
                        roleId: [EMPLOYEE_ROLE_ID, CUSTOMER_ROLE_ID],
                    }
                }
            ]
            
        });
        const numOfIssueByRoles = {
            employee: {
                current: 0,
                previous: 0
            },
            customer: {
                current: 0,
                previous: 0
            }
        };

        itemsByRoles.filter(item => item.reportMoment).forEach(item => {
            if (numOfIssueByRoles[ROLE_NAMES[item.roleId]]) {
                numOfIssueByRoles[ROLE_NAMES[item.roleId]][item.reportMoment] = item.count;
            }
        });

        const itemsByCategories: any = await IssueModel.count({
            group: [`${CategoriesIssueModel.name}.id`, 'reportMoment'],
            attributes: [
                [Sequelize.literal(`CASE when ${IssueModel.name}.createdAt between "${currentStartDate}" and "${currentEndDate}" then "current" when ${IssueModel.name}.createdAt between "${previousStartDate}" and "${previousEndDate}" then "previous" END`), 'reportMoment'],
            ],
            include: [
                {
                    model: CategoriesIssueModel,
                    required: true,
                    where: {
                        id: [
                            HOT_DESK_ISSUE_ID,
                            MEETING_ROOMS_ISSUE_ID,
                            PARKING_ISSUE_ID,
                            PHONE_BOOTHS_ISSUE_ID
                        ],
                    }
                }
            ]
            
        });

        const numOfIssueByCategories = {
            hotDesk: {
                current: 0,
                previous: 0
            },
            meetingRooms: {
                current: 0,
                previous: 0
            },
            parking: {
                current: 0,
                previous: 0
            },
            phoneBooths: {
                current: 0,
                previous: 0
            }
        };

        itemsByCategories.filter(item => item.reportMoment).forEach(item => {
            if (numOfIssueByCategories[CATEGORY_NAMES[item.id]]) {
                numOfIssueByCategories[CATEGORY_NAMES[item.id]][item.reportMoment] = item.count;
            }
        });

        
        res.send({
            numOfIssueByRoles,
            numOfIssueByCategories,
        });
        
        

    } catch (error) {        
        res.send(500);
    }
    
});

const UNRESOLVED_STATUS_ID = 1
app.post('/user-by-issues-status', jsonParser, async ({body}: Request<{}, {}, {
    issueStatusId: string,
    page: number,
    size: number,
    sortDirection: string
}>, res) => {
    const issueStatusId = body.issueStatusId ? body.issueStatusId : UNRESOLVED_STATUS_ID;
    
    try {
        const items: any = await IssueModel.findAll({
            group: [`${IssueModel.name}.createdBy`],
            attributes: [
                [Sequelize.fn("COUNT", Sequelize.literal(`CASE WHEN ${IssueModel.name}.issueStatusId = ${issueStatusId} THEN 1 END`)), "filteredIssueCount"],
                [Sequelize.fn("MAX", Sequelize.col(`${IssueModel.name}.updatedAt`)), "latestDate"],
                [Sequelize.fn("COUNT", Sequelize.col(`${IssueModel.name}.issueStatusId`)), "totalIssue"]
            ],
            include: [
                {
                    model: UserModel,
                    required: true,
                    attributes: [
                        `id`,
                        `firstName`,
                        `lastName`,
                    ],
                }
            ],
            order: [[Sequelize.literal('latestDate'), body.sortDirection]],
            offset: body.page * body.size,
            limit: (body.page + 1) * body.size,
        });
        res.send(items)
    } catch (error) {
        console.log(error);
        
        res.send(500);
    }
    
});


app.post('/issues', jsonParser, async ({body}: Request<{}, {}, {
    page: number,
    size: number,
    sortDirection: string,
    sortBy: string
}>, res) => {    
    try {
        const items: any = await IssueModel.findAll({
            order: [[body.sortBy ? body.sortBy : 'updatedAt', body.sortDirection]],
            offset: body.page * body.size,
            limit: (body.page + 1) * body.size,
        });
        res.send(items)
    } catch (error) {
        console.log(error);
        
        res.send(500);
    }
    
});


app.post('/issues-by-organize', jsonParser, async ({body}: Request<{}, {}, {
    startDate: string,
    endDate: number,

}>, res) => {
    
    try {
        const items: any = await IssueModel.findAll({
            group: [`${IssueModel.name}.organizationId`],
            include: [
                {
                    model: OrganizationsModel,
                    required: true,
                    attributes: [
                        `id`,
                        `name`,
                    ],
                    where: {
                        isActive: true
                    }
                }
            ],
            where: {
                createdAt: [body.startDate, body.endDate]
            }
            
        });
        res.send(items)
    } catch (error) {
        console.log(error);
        
        res.send(500);
    }
    
});

app.listen(3000);