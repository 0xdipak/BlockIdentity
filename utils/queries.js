import { contract } from "./index";

function parseErrorMsg(e) {
  const json = JSON.parse(JSON.stringify(e));
  return json?.resson || json?.error?.message;
}

// Get Username By Address
export async function getUserNameByAddress(userAddress) {
  try {
    const contractObj = await contract();
    const userName = await contractObj.getUserNameByAddress(userAddress);
    return userName;
  } catch (error) {
    console.log(error);
    return parseErrorMsg(error);
  }
}

// Create User
export async function createUser(
  userName,
  basicInfo,
  professionalInfo,
  socialLinks,
  visibility
) {
  try {
    const contractObj = await contract();
    const txnResponse = await contractObj.createUser(
      userName,
      basicInfo,
      professionalInfo,
      socialLinks,
      visibility
    );

    const receipt = await txnResponse.wait();
    return receipt;
  } catch (error) {
    console.log(error);
    return parseErrorMsg(error);
  }
}

// Edit User
export async function editUser(
  userName,
  basicInfo,
  professionalInfo,
  socialLinks,
  visibility
) {
  try {
    const contractObj = await contract();
    const txnResponse = await contractObj.editUser(
      userName,
      basicInfo,
      professionalInfo,
      socialLinks,
      visibility
    );

    const receipt = await txnResponse.wait();
    return receipt;
  } catch (error) {
    console.log(error);
    return parseErrorMsg(error);
  }
}

// Get User By User Name
export async function getUserByUserName(userName) {
  try {
    const contractObj = await contract();
    const user = await contractObj.getUserByUserName(userName);
    return {
      basicInfo: {
        firstName: user.basicInfo.firstName,
        lastName: user.basicInfo.lastName,
        email: user.basicInfo.email,
        homeAddress: user.basicInfo.homeAddress,
        dateOfBirth: user.basicInfo.dateOfBirth,
        phoneNumber: user.basicInfo.phoneNumber,
      },
      professionalInfo: {
        education: user.professionalInfo.education,
        workHistory: user.professionalInfo.workHistory,
        jobTitle: user.professionalInfo.jobTitle,
        info: user.professionalInfo.info,
        skills: user.professionalInfo.skills,
        imageURL: user.professionalInfo.imageURL,
      },
      socialLinks: {
        x: user.socialLinks.x,
        instagram: user.socialLinks.instagram,
        tiktok: user.socialLinks.tiktok,
        youtube: user.socialLinks.youtube,
        linkedin: user.socialLinks.linkedin,
      },
      visibility: {
        education: user.visibility.education,
        workHistory: user.visibility.workHistory,
        phoneNumber: user.visibility.phoneNumber,
        homeAddress: user.visibility.homeAddress,
        dateOfBirth: user.visibility.dateOfBirth,
      },
    };
  } catch (error) {
    console.log(error);
    return parseErrorMsg(error);
  }
}

// Get User By Address
export async function getUserByAddress(userAddress) {
  try {
    const contractObj = await contract();
    const user = await contractObj.getUserByAddress(userAddress);
    return {
      basicInfo: {
        firstName: user.basicInfo.firstName,
        lastName: user.basicInfo.lastName,
        email: user.basicInfo.email,
        homeAddress: user.basicInfo.homeAddress,
        dateOfBirth: user.basicInfo.dateOfBirth,
        phoneNumber: user.basicInfo.phoneNumber,
      },
      professionalInfo: {
        education: user.professionalInfo.education,
        workHistory: user.professionalInfo.workHistory,
        jobTitle: user.professionalInfo.jobTitle,
        info: user.professionalInfo.info,
        skills: user.professionalInfo.skills,
        imageURL: user.professionalInfo.imageURL,
      },
      socialLinks: {
        x: user.socialLinks.x,
        instagram: user.socialLinks.instagram,
        tiktok: user.socialLinks.tiktok,
        youtube: user.socialLinks.youtube,
        linkedin: user.socialLinks.linkedin,
      },
      visibility: {
        education: user.visibility.education,
        workHistory: user.visibility.workHistory,
        phoneNumber: user.visibility.phoneNumber,
        homeAddress: user.visibility.homeAddress,
        dateOfBirth: user.visibility.dateOfBirth,
      },
    };
  } catch (error) {
    console.log(error);
    return parseErrorMsg(error);
  }
}

// Function to add a job ID that a user has applied to
export async function addJob(username, jobId) {
  try {
    const contractObj = await contract();
    const transactionResponse = await contractObj.addJob(username, jobId);
    const receipt = await transactionResponse.wait();
    return receipt;
  } catch (e) {
    console.error("Error in addJob:", e);
    return parseErrorMsg(e);
  }
}

// Function to get all job IDs applied by a user
export async function getJobs(username) {
  try {
    const contractObj = await contract();
    const jobIds = await contractObj.getJobs(username);
    return jobIds.map((jobId) => jobId.toString());
  } catch (e) {
    console.error("Error in getJobs:", e);
    return parseErrorMsg(e);
  }
}

// Function to set the visibility of user information
export async function setVisibility(
  username,
  education,
  workHistory,
  phoneNumber,
  homeAddress,
  dateOfBirth
) {
  try {
    const contractObj = await contract();
    const transactionResponse = await contractObj.setVisibility(
      username,
      education,
      workHistory,
      phoneNumber,
      homeAddress,
      dateOfBirth
    );
    const receipt = await transactionResponse.wait();
    return receipt;
  } catch (e) {
    console.error("Error in setVisibility:", e);
    return parseErrorMsg(e);
  }
}

// Function to get the visibility of user information
export async function getVisibility(username) {
  try {
    const contractObj = await contract();
    const visibility = await contractObj.getVisibility(username);
    return {
      education: visibility.education,
      workHistory: visibility.workHistory,
      phoneNumber: visibility.phoneNumber,
      homeAddress: visibility.homeAddress,
      dateOfBirth: visibility.dateOfBirth,
    };
  } catch (e) {
    console.error("Error in getVisibility:", e);
    return parseErrorMsg(e);
  }
}
