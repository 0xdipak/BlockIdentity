// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Identity {
    struct User {
        string firstName;
        string lastName;
        string userName;
        string email;
        string homeAddress;
        string phoneNumber;
        string x;
        string tiktok;
        string instargram;
        string youtube;
        string linkedin;
        string dateOfBirth;
        string education;
        string workHistory;
        string jobTitle;
        string info;
        string[] skills;
        string imageUrl;
        bool exist;
        uint256[] appliedjobs;
        Visibility visibility;
    }

    struct Visibility {
        bool education;
        bool workHistory;
        bool phoneNumber;
        bool homeAddress;
        bool dateOfBirth;
    }

    struct BasicInfo {
        string firstName;
        string lastName;
        string userName;
        string email;
        string homeAddress;
        string phoneNumber;
        string dateOfBirth;
    }

    struct SocialLinks {
        string x;
        string tiktok;
        string instargram;
        string youtube;
        string linkedin;
    }

    struct ProfessionalInfo {
        string education;
        string workHistory;
        string jobTitle;
        string info;
        string[] skills;
        string imageUrl;
    }

    mapping(string => User) private users;
    mapping(address => string) private addressToUserName;
    mapping(string => bool) private userNames;

    modifier onlyUniqueUserName(string memory userName) {
        require(!userNames[userName], "User already exists.");
        _;
    }

    function editUser(
        string memory userName,
        BasicInfo memory basicInfo,
        ProfessionalInfo memory professionalInfo,
        SocialLinks memory socialLinks,
        Visibility memory visibility
    ) public onlyUniqueUserName(userName) {
        User storage user = users[userName];

        user.firstName = basicInfo.firstName;
        user.lastName = basicInfo.lastName;
        user.userName = basicInfo.userName;
        user.email = basicInfo.email;
        user.homeAddress = basicInfo.homeAddress;
        user.dateOfBirth = basicInfo.dateOfBirth;
        user.education = professionalInfo.education;
        user.workHistory = professionalInfo.workHistory;
        user.phoneNumber = basicInfo.phoneNumber;
        user.jobTitle = professionalInfo.jobTitle;
        user.x = socialLinks.x;
        user.tiktok = socialLinks.tiktok;
        user.instargram = socialLinks.instargram;
        user.youtube = socialLinks.youtube;
        user.linkedin = socialLinks.linkedin;
        user.info = professionalInfo.info;
        user.skills = professionalInfo.skills;
        user.imageUrl = professionalInfo.imageUrl;
        user.exist = true;
        user.visibility = visibility;
        userNames[userName] = true;
        addressToUserName[msg.sender] = userName;
    }

    function createUser(
        string memory userName,
        BasicInfo memory basicInfo,
        ProfessionalInfo memory professionalInfo,
        SocialLinks memory socialLinks,
        Visibility memory visibility
    ) public {
        require(users[userName].exist, "User does not exist.");
        User storage user = users[userName];

        user.firstName = basicInfo.firstName;
        user.lastName = basicInfo.lastName;
        user.userName = basicInfo.userName;
        user.email = basicInfo.email;
        user.homeAddress = basicInfo.homeAddress;
        user.dateOfBirth = basicInfo.dateOfBirth;
        user.education = professionalInfo.education;
        user.workHistory = professionalInfo.workHistory;
        user.phoneNumber = basicInfo.phoneNumber;
        user.jobTitle = professionalInfo.jobTitle;
        user.x = socialLinks.x;
        user.tiktok = socialLinks.tiktok;
        user.instargram = socialLinks.instargram;
        user.youtube = socialLinks.youtube;
        user.linkedin = socialLinks.linkedin;
        user.info = professionalInfo.info;
        user.skills = professionalInfo.skills;
        user.imageUrl = professionalInfo.imageUrl;
        user.visibility = visibility;
    }

    function getUserByUserName(
        string memory userName
    )
        public
        view
        returns (
            BasicInfo memory basicInfo,
            ProfessionalInfo memory professionalInfo,
            SocialLinks memory socialLinks,
            Visibility memory visibility
        )
    {
        require(users[userName].exist, "User does not exits.");

        User storage user = users[userName];

        basicInfo = BasicInfo(
            user.firstName,
            user.lastName,
            user.userName,
            user.email,
            user.homeAddress,
            user.dateOfBirth,
            user.phoneNumber
        );

        professionalInfo = ProfessionalInfo(
            user.education,
            user.workHistory,
            user.jobTitle,
            user.info,
            user.skills,
            user.imageUrl
        );

        socialLinks = SocialLinks(
            user.x,
            user.tiktok,
            user.instargram,
            user.youtube,
            user.linkedin
        );

        visibility = user.visibility;

        return (basicInfo, professionalInfo, socialLinks, visibility);
    }

    function getUserByAddress(
        address userAddress
    )
        public
        view
        returns (
            BasicInfo memory basicInfo,
            ProfessionalInfo memory professionalInfo,
            SocialLinks memory socialLinks,
            Visibility memory visibility
        )
    {
        string memory userName = addressToUserName[userAddress];
        return getUserByUserName(userName);
    }

    function getUserNameByAddress(
        address userAddress
    ) public view returns (string memory) {
        return addressToUserName[userAddress];
    }

    function setVisibility(
        string memory userName,
        bool education,
        bool workHistory,
        bool phoneNumber,
        bool homeAddress,
        bool dateOfBirth
    ) public {
        require(users[userName].exist, "User does not exist.");
        User storage user = users[userName];
        user.visibility.education = education;
        user.visibility.workHistory = workHistory;
        user.visibility.phoneNumber = phoneNumber;
        user.visibility.homeAddress = homeAddress;
        user.visibility.dateOfBirth = dateOfBirth;
    }

    function getVisibility(
        string memory userName
    ) public view returns (Visibility memory) {
        require(users[userName].exist, "User does not exist.");
        return users[userName].visibility;
    }
}
