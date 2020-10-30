import store from '@/store'

/**
 * @param {Array} value
 * @returns {Boolean}
 * @example see @/views/permission/directive.vue
 */
export default function checkPermission(value) {

  if (value && value instanceof Array && value.length > 0) {
    const roles = store.getters && store.getters.roles
      console.log(roles);
      console.log("00")
    const permissionRoles = value

    const hasPermission = roles.some(role => {
      return permissionRoles.includes(role)
    })
    
    if (!hasPermission) {
      return false
    }
    console.log(hasPermission);
    console.log("11")
    return true
  } else {
    console.error(`need roles! Like v-permission="['admin','editor']"`)
    return false
  }
}
