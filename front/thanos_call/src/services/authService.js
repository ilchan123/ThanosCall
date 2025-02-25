import { db, collection, getDocs, query, where } from "../services/firebase"
import { STRINGS } from "../config/string"
export const loginWithFirestore = async (id, password) => {
  try {
    const q = query(collection(db, "consulters"), where("id", "==", id))
    const querySnapshot = await getDocs(q)

    if (querySnapshot.empty) {
      return {
        success: false,
        message: STRINGS.SERVICES.AUTH_SERVICE.ID_NO_EXIST,
      }
    }

    let isAuthenticated = false
    let userInfo = null

    querySnapshot.forEach((doc) => {
      const userData = doc.data()
      if (userData.password === password) {
        isAuthenticated = true
        userInfo = {
          id: userData.id,
          name: userData.name,
          age: userData.age,
          rank: userData.rank,
          img: userData.img,
          consult_count: userData.consult_count ?? 0,
          consult_time: userData.consult_time ?? 0,
        }
      }
    })

    return isAuthenticated
      ? {
          success: true,
          message: STRINGS.SERVICES.AUTH_SERVICE.LOGIN_SUCCESS,
          user: userInfo,
        }
      : {
          success: false,
          message: STRINGS.SERVICES.AUTH_SERVICE.PASSWORD_NO_EXIST,
        }
  } catch (error) {
    console.error(STRINGS.SERVICES.AUTH_SERVICE.ERROR, error)
    return {
      success: false,
      message: STRINGS.SERVICES.AUTH_SERVICE.LOGIN_ERROR,
    }
  }
}
