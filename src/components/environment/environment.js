const ENVIRONMENT = {
  PRODUCTION: { BASE_URL: 'https://truckr-backend.herokuapp.com' },
  STAGING: { BASE_URL: '' },
  DEVELOPMENT:
  {
    BASE_URL: `https://truckr-backend.herokuapp.com`,
    LOGIN: `/login`,
    GET_TRUCKS: `/trucks`,
    GET_TRUCK_PRODUCTS: `/products`,
    GET_INGREDIENTS: `/ingredients`,
    SAVE_ORDER: `/order`,
    SAVE_USER: `/user`,
    GET_PROFILE: `/user`,
  },
}

export { ENVIRONMENT }