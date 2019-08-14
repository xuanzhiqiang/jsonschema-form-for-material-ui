/* eslint-disable global-require */
export default {
  maxLength: require('./max-length').default,
  minLength: require('./min-length').default,
  pattern: require('./pattern').default,
  minimum: require('./minimum').default,
  maximum: require('./maximum').default,
  filesize: require('./file-size').default,
  minArrayLength: require('./min-array-length').default,
  maxArrayLength: require('./max-array-length').default
};
