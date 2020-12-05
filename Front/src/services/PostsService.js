import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('datas')
  },
  addPost (params) {
    return Api().post('datas', params)
  },
  addLogin (params) {
    return Api().post('users/login', params)
  },
  addRegister (params) {
    return Api().post('users/register', params)
  },
  yourPost (params) {
    return Api().get('datas/' + params.id)
  }
}
