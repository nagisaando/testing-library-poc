import {extend} from 'vee-validate'
import {required, email, min, integer} from 'vee-validate/dist/rules'

extend('required', required)

// Install email rule and message.
extend('email', email)

// Install min rule and message.
extend('min', min)

extend('integer', integer)
