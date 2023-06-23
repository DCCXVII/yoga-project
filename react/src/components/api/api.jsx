import axios from "axios";

export let token = localStorage.getItem("token");
export let userData = JSON.parse(localStorage.getItem("userData"));

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  timeout: 50000,
  withCredentials: true,
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const signup = async (name, email, password) => {
  try {
    const response = await api.post("/register", { name, email, password });
    const newToken = response.data.data.token;
    token = newToken;
    localStorage.setItem("token", newToken);
    setAuthToken(newToken); // Update the header with the new token
    return newToken;
  } catch (error) {
    console.error("Signup failed:", error.response.data);
    throw new Error(error.response.data.message);
  }
};

export const login = async (email, password) => {
  try {
    const response = await api.post("/login", { email, password });
    if (response.data && response.data.data) {
      const newUserData = response.data.data;
      const newToken = newUserData.token;
      localStorage.setItem("token", newToken);
      localStorage.setItem("userData", JSON.stringify(newUserData));
      token = newToken;
      if (localStorage.getItem("userData")) {
        userData = JSON.parse(localStorage.getItem("userData"));
        console.log(userData);
      } else {
        userData = null;
      }
      setAuthToken(newToken); // Update the header with the new token
    } else {
      throw new Error("Invalid response data");
    }
    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response.data);
    throw new Error(error.response.data.message);
  }
};

export const Logout = async () => {
  try {
    token = null;
    userData = null;
    localStorage.removeItem("token");
    localStorage.removeItem("userData");

    setAuthToken(null); // Remove the authorization header
    console.log("Logged out: " + token);
    return token;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const fetchDisciplines = async () => {
  try {
    const response = await api.get("/discipline");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch disciplines:", error);
    throw error;
  }
};

export const fetchClasses = async () => {
  try {
    const response = await api.get("/disciplines");
    return response.data.discipline.classes;
  } catch (error) {
    console.error("Failed to fetch disciplines:", error);
    throw error;
  }
};



export const fetchDashboardData = async () => {
  try {
    const response = await api.get("/admin/dashbord");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch dashboard data:", error);
    throw error;
  }
};

export const fetchInstructorCoursesData = async () => {
  try {
    const response = await api.get("/instructor/courses");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch instructor courses data:", error);
    throw error;
  }
};

export const fetchInstructorPacksData = async () => {
  try {
    const response = await api.get("/instructor/packs");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch instructor packs data:", error);
    throw error;
  }
};

export const createCourse = async (courseData) => {
  try {
    const formData = new FormData();
    formData.append("titre", courseData.titre);
    formData.append("discipline_id", courseData.discipline_id);
    formData.append("classe_id", courseData.classe_id);
    formData.append("niveau", courseData.niveau);
    formData.append("price", parseFloat(courseData.price));
    formData.append("description", courseData.description);
    formData.append("background_image", courseData.background_image);
    formData.append("video", courseData.video);
    const response = await api.post("/instructor/create-course", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Course created:", response.data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to create course:", error);
    throw error;
  }
};

export const createPack = async (packData) => {
  try {
    const formData = new FormData();
    formData.append("titre", packData.titre);
    formData.append("description", packData.description);
    formData.append("niveau", packData.niveau);
    formData.append("price", parseFloat(packData.price));
    formData.append("discipline_id", packData.discipline_id);
    formData.append("background_image", packData.background_image);
    // formData.append("teaser", packData.teaser);
    packData.courses.forEach((course) => {
      formData.append("courses[]", course);
    });

    const response = await api.post("/instructor/create-pack", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Pack created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to create pack:", error);
    throw error;
  }
};

export const editCourse = async (courseId, courseData) => {
  try {
    const formData = new FormData();
    formData.append("titre", courseData.titre);
    formData.append("discipline_id", courseData.discipline_id);
    formData.append("classe_id", courseData.classe_id);
    formData.append("niveau", courseData.niveau);
    formData.append("price", parseFloat(courseData.price));
    formData.append("description", courseData.description);
    formData.append("background_image", courseData.background_image);
    formData.append("video", courseData.video);

    const response = await api.post(`/courses/${courseId}/edit`, courseData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to edit course:", error);
    throw error;
  }
};

export const fetchCourseData = async (courseId) => {
  try {
    const response = await api.get(`/instructor/courses/${courseId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch course data:", error);
    throw error;
  }
};



export const fetchCourseDataById = async (id) => {
  try {
    const response = await api.get(`/explore/?id=${id}`);
    console.log("hadi afficher dyal lcourses"+response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch course data:", error);
    throw error;
  }
};


export const fetchInstructorProfileData = async () => {
  try {
    const response = await api.get("/profile");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch instructor profile data:", error);
    throw error;
  }
};

export const saveProfile = async (profileData) => {
  try {
    const response = await api.put("/edit-profile", profileData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to save profile:", error);
    throw error;
  }
};

export const changePassword = async (currentPassword, newPassword) => {
  try {
    const response = await api.post("/change-password", {
      current_password: currentPassword,
      new_password: newPassword,
    });
    return response.data.message; // Assuming the response contains a 'message' field
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error("Current password is incorrect");
    } else {
      console.error("Password change failed:", error);
      throw new Error("Failed to change password");
    }
  }
};

export const changeBackgroundImage = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append("background_image", imageFile);

    const response = await api.put("/edit-profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to change background image:", error);
    throw error;
  }
};

export const fetchCoursesByDiscipline = async (disciplineId) => {
  try {
    const response = await api.get(`/instructor/discipline/${disciplineId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch courses by discipline:", error);
    throw error;
  }
};

export const fetchCourses = async (filters) => {
  try {
    const response = await api.get("/explore", { params: filters });
    return response.data.courses;
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    throw error;
  }
};

export const fetchPacks = async () => {
  try {
    const response = await api.get("/packs");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch packs:", error);
    throw error;
  }
};



export const fetchClassesByDiscipline = async (disciplineId) => {
  try {
    const response = await api.get(`/discipline/${disciplineId}`);
    return response.data.classes;
  } catch (error) {
    console.error("Failed to fetch classes by discipline:", error);
    throw error;
  }
};

export const fetchInstructors = async () => {
  const response = await api.get("/instructors");
  return response.data.instructors;
};


export const changeProfileImage = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append("profile_image", imageFile);

    const response = await api.put("/edit-profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to change profile image:", error);
    throw error;
  }
};

export const getUserData = async () => {
  try {
    const response = await api.get("/profile"); // Replace "/user-data" with the actual endpoint to fetch user data
    console.log(" l profile howa hada : "+response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user data:", error.response.data);
    throw new Error(error.response.data.message);
  }
};



export const becomeInstructor = async (phoneNumber, cvFile) => {
  try {
    const formData = new FormData();
    formData.append("phone_number", phoneNumber);
    formData.append("cv", cvFile);

    const response = await api.post("/become-instructor", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to submit instructor request:", error);
    throw error;
  }
};


export default api;
