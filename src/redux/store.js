import { configureStore } from '@reduxjs/toolkit'
import { homeReducer } from './slices/homeSlice'
import { aboutReducer } from './slices/aboutSlice'
import { serviceReducer } from './slices/servicesSlice'
import { serviceDetailsReducer } from './slices/serviceDetailsSlice'
import { productReducer } from './slices/vehiclesSlice'
import { productDetailsReducer } from './slices/vehicleDetailsSlice'
import { contactUsReducer } from './slices/contactSlice'
import { contactUsFormReducer } from './slices/contactFormSlice'
import { footerReducer } from './slices/footerSlice'
import { buyCarReducer } from './slices/vehicleFormSlice'
import { paymentReducer } from './slices/paymentTypesSlice'

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
    footerData:footerReducer,
    buyCar:buyCarReducer,
    paymentType:paymentReducer
  },
})