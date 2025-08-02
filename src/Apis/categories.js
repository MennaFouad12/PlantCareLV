import axios from "axios"

export async function getCategories()
{
    try {
        let token = localStorage.getItem('userToken')
        let {data} = await axios.get('https://plantcareapi.runasp.net/api/Category/GetAllCategories', {
          headers: {
              Authorization: `Bearer ${token}`
          }
      })
        return data
        
    } catch (error) {
          return error?.message
    }
}
