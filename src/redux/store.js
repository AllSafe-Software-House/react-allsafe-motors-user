import { configureStore } from '@reduxjs/toolkit'
import { homeReducer } from './slices/homeSlice'
import { aboutReducer } from './slices/aboutSlice'
import { serviceReducer } from './slices/servicesSlice'
import { serviceDetailsReducer } from './slices/serviceDetailsSlice'
import { productReducer } from './slices/vehiclesSlice'
import { productDetailsReducer } from './slices/vehicleDetailsSlice'
import { contactUsReducer } from './slices/contactSlice'
import { contactUsFormReducer } from './slices/contactFormSlice'

export const store = configureStore({
  reducer: {
    homeData: homeReducer,
    aboutData:aboutReducer,
    servicesData:serviceReducer,
    servicesDetails:serviceDetailsReducer,
    productsData:productReducer,
    productDetails:productDetailsReducer,
    contactData:contactUsReducer,
    postContact:contactUsFormReducer,
  },
})