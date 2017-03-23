import * as moment from 'moment';

export const ROLES = {
  ACCOUNT_OWNER: {
    name: 'Account Owner',
    isCustom: false,
    isGlobal: true,
    createdOn: moment().format(),
    createdBy: 'Alcomy',
    permissions: [
      {
        name: 'Users',
        level: 'full'
      },
      {
        name: 'Users',
        level: 'full'
      },
      {
        name: 'Users',
        level: 'full'
      },
      {
        name: 'Users',
        level: 'full'
      },
      {
        name: 'Users',
        level: 'full'
      }
    ]
  }
}