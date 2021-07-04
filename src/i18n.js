import Vue from "vue";
import VueI18n from "vue-i18n";


// const messages = {
//   en: {
//     message: {
//       //a//
//       add_action: "Add Action",
//       add_value: "Add Value",
//       add: "Add",
//       about: "About",
//       actions: "Actions",
//       admin: "Admin",
//       about_page: "About Page",
//       add_role: "Add Role",
//       add_dep: "Add Department",
//       all_users: "All Users",
//       add_dt: "Add device type",
//       add_device: "Add devices",
//       add_unit: "Add Unit",
//       add_hd: "Add Head Data",
//       add_td: "Add Track Data",
//       action_name: "Action Name",
//       advance: "Advance",
//       //b//
//       buildby: "Built by",
//       //c//
//       choosetime: "Choosetime",
//       choosedate: "ChooseDate",
//       create_project: "Create Project",
//       create_track: "Create Track",
//       cancel: "Cancel",
//       create_action: "Create Action",
//       choose_advanceTime: "Choose AdvanceTime:",
//       choose_device: "Choose Device",
//       //d//
//       devby: "Develop By",
//       department_relate: "Department Relate",
//       department_table: "Department Table",
//       datebuilt: "Date Built",
//       dateExpire: "Date Expire",
//       device_type: "Device Type",
//       dashboard: "Dashboard",
//       department: "Department",
//       devices: "Devices",
//       device_report: "Device Report",
//       detail: "Detail",
//       delete: "Delete",
//       duration: "Duration",
//       //e//
//       edit_unit: "Edit Unit",
//       email: "email",
//       edit_profile: "Edit Profile",
//       edit_role: "Edit Role",
//       edit_dep: "Edit Department",
//       edit_user: "Edit User",
//       edit_dt: "Edit device type",
//       edit_device: "Edit devices",
//       edit_hd: "Edit Head Data",
//       edit_department_relate: "Edit department relate",
//       edit_action: "Edit Action",
//       edit_track: "Edit Track",
//       enddate: "End Date",
//       //f//
//       find_users: "Find Users",
//       forgot_password: "For got Password?",
//       //g//
//       graphview: "Graph View",
//       gpio: "GPIO",
//       //h//
//       homepage: "Home Page",
//       head_data: "Head Data",
//       //i//

//       info1:
//         "Traditional weather gauges and installation of custom weather gauges",
//       info2:
//         "To solve the problem of collecting old data which is delayed, some data may be corrupted and retrieval of old data is difficult.  Therefore, the use of a weather station (Weather Station) can collect data at any time, faster and more convenient to view data online.",
//       info3:
//         "Student of the Department of Computer Science, Faculty of Natural Sciences",
//       info4: "Year 2019-2020",
//       info5: "To create an online weather monitoring and storage system",
//       info6: "To facilitate the monitoring and storage of weather information",
//       info7:
//         "To facilitate the use of information to make reports or other relevant research",
//       info8: "To save time searching for past weather information",
//       inputlastname: "Enter Lastname",
//       inputname: "Enter Name",
//       inforProject: "Information Project",
//       invite: "Invite",
//       //j//
//       //k//
//       //l//
//       lastname: "Lastname",
//       Localtion_Project: "Location of Project",
//       logout: "Logout",
//       login: "Login",
//       lange: "ປ່ຽນເປັນ ພາສາລາວ",
//       //m//
//       monthly: "Monthly",
//       maps: "Map",
//       my_profile: "My Profile",
//       management: "Management",
//       mamber_management: "Mambers Management",
//       main: "Main",
//       member_of: "Member Of",
//       //n//
//       name: "name",
//       name_tack: "Name Track",
//       notifications: "Notifications",
//       //o//
//       other: "Other",
//       one_hours: "1 Hours",
//       or: "Or",
//       //p//
//       purpose: "Purpose",
//       password: "Password",
//       pages: "Pages",
//       project: "Projects",
//       project_dashboard: "Project Dashboard",
//       projects_management: "Projects Management ",
//       project_track: "Project Track",
//       password_less6: "Password (at least 6 characters)",
//       projects_name: "Projects Name",
//       projects_devices: "Devices Use",
//       //q//
//       //r//
//       role: "Role",
//       register: "Register",
//       readall: "Read All",
//       report: "Report",
//       //s//
//       search: "Search",
//       student_depart: "Student",
//       signup: "Signup",
//       status: "Status",
//       super_admin: "Super Admin",
//       settings: "Settings",
//       save: "Save",
//       select_head_track: "Select Head Track",
//       select_option: "Select Option",
//       select_action: "Select Action",
//       select_role: "Add Role",
//       selecet_project: "Select Project",
//       select_time: "Select Time:",
//       show_data: "Show Data",
//       startdate: "Start Date",
//       //t//
//       topic_system: "ລະບົບຕິດຕາມ ແລະ ຈັດເກັບຂໍ້ມູນສະພາບອາກາດຂອງຄະນະກະເສດສາດ",
//       topic: "Topic",
//       tel_need: "Number (20xxxxxxxx)",
//       teacher_depart: "Teacher",
//       today: "Today",
//       tableview: "Table View",
//       track_data: "Track Data",
//       tables: "Tables",
//       time_work: "Time Work (S)",
//       time_sleep: "Time Sleep (S)",
//       track_name: "Track Name",
//       //u//
//       username: "Username",
//       users: "Users",
//       unit: "Unit",
//       users_report: "Users Report",
//       update: "Update",
//       //v//
//       //w//
//       weekly: "Weekly",
//       //x//
//       //y//
//       your_project: "Your Projects"
//       //z//
//     },
//    // $vuetify: en,
//   },
//   la: {
//     message: {
//       //a//
//       add_value: "ໃສ່ຄ່າ",
//       add_td: "ເພີ່ມການຕິດຕາມ",
//       add: "ເພີ່ມ",
//       about: "ກ່ຽວກັບ",
//       aboutpage: "ໜ້າກຽວກັບ",
//       actions: "ການກະທໍາ",
//       admin: "ຜູ້ເບິ່ງແຍງລະບົບ",
//       add_role: "ເພີ່ມສິດຊະມາຊີກ",
//       add_dep: "ເພີ່ມພາກວິຊາ",
//       all_users: "ຜູ້ໃຊ້ ທັງໝົດ",
//       add_dt: "ເພີ່ມປະເພດອຸປະກອນ",
//       add_device: "ເພີ່ມອຸປະກອນ",
//       add_unit: "ເພີ່ມຫົວໜ່ວຍ",
//       add_hd: "ເພີ່ມຫົວຂໍ້ຂໍ້ມູນ",
//       add_action: "ເພິ່ມກາກະທໍາ",
//       action_name: "ຊື່ການກະທໍາ",
//       advance: "ເລືອກຂັ້ນສູງ",
//       //b//
//       buildby: "ສ້າງໂດຍ",
//       //c//
//       create_project: "ເພີ່ມໂຄງການ",
//       create_track: "ສ້າງການຕິດຕາມ",
//       choose_depart: "ເລືອກພາກວິຊາ",
//       choosetime: "ເລືອກຊ່ວງເວລາ",
//       createtrack: "ສ້າງການຕິດຕາມ",
//       cancel: "ຍົກເລີກ",
//       create_action: "ສ້າງການກະທໍາ",
//       choosedate: "ເລືອກຊ່ວງເວລາ",
//       choose_advanceTime: "ເລືອກລາຍນາທີ",
//       choose_device: "ເລືອກ Device ",
//       //d//
//       devby: "ພັດທະນາໂດຍ",
//       department_relate: "ພາກສ່ວນທີ່ກ່ຽວຂ້ອງ",
//       department_table: "ຕາຕະລາງພາກວິຊາ",
//       datebuilt: "ວັນທີ່ສ້າງ",
//       dateExpire: "ວັນໝົດກຳນົດ",
//       dashboard: "ກະດານຂໍ້ມູນ",
//       department: "ພາກວິຊາ",
//       device_type: "ປະເພດອຸປະກອນ",
//       devices: "ອູປະກອນ",
//       device_report: "ລາຍງານ ອຸປະກອນ",
//       detail: "ໃສ່ລາຍລະອຽດ",
//       delete: "ລຶບ",
//       duration: "ຊ່ວງເວລາ:",
//       //e//
//       edit_department_relate: "ແກ້ໄຂພາກວິຊາທິ່ກຽວຂ້ອງ",
//       edit_hd: "ແກ້ໄຂຫົວຂໍ້ຂໍ້ມູນ",
//       edit_unit: "ແກ້ໄຂຫົວໜ່ວຍ",
//       edit_device: "ແກ້ໄຂອຸປະກອນ",
//       edit_profile: "ແກ້ໄຂ ຂໍ້ມູນປະຈໍາຕົວ",
//       email: "ອີເມວ",
//       editprofile: "ແກ້ໄຂ ຂໍ້ມູນປະຈໍາຕົວ",
//       edit_role: "ແກ້ໄຂ ສິດຊະມາຊິກ",
//       edit_dep: "ແກ້ໄຂພາກວິຊາ",
//       edit_user: "ແກ້ໄຂ ຜູ້ໃຊ້",
//       edit_dt: "ແກ້ໄຂປະເພດອຸປະກອນ",
//       edit_action: "ແກ້ໄຂກາກະທໍາ",
//       edit_track: "ແກ້ໄຂການຕິດຕາມ",
//       enddate: "ວັນສິ້ນສຸດ",
//       //f//
//       find_users: "ຊອກຫາຜູ້ໃຊ້",
//       forgot_password: "ລືມລະຫັດຜ່ານ",
//       //g//
//       graphview: "ສະແດງກຣາຟ",
//       gpio: "GPIO",
//       //h//
//       homepage: "ໜ້າຫຼັກ",
//       head_data: "ຫົວຂໍ້ຂໍມູນ",
//       //i//
//       info1:
//         "ເຄື່ອງວັດແທກຂໍ້ມູນສະພາບອາກາດແບບດັ້ງເດີມ ແລະ ການຕິດຕັ້ງເຄື່ອງວັດແທກຂໍ້ມູນສະພາບອາກາດແບບໃໝ່",
//       info2:
//         "ເພື່ອແກ້ໄຂບັນຫາໃນການເກັບກໍາຂໍ້ມູນແບບເກົ່າທີ່ມີຄວາມລ່າຊ້າ, ບາງຂໍ້ມູນອາດມີຄວາມເສຍຫາຍ ແລະ ຂອກຫາຂໍ້ມູນເກົ່າມີຄວາມຫຍຸ້ງຍາກ. ສະນັ້ນ, ການນໍາໃຊ້ເຄື່ອງວັດແທກຂໍ້ມູນສະພາບອາກາດແບບໃໝ່ (Weather Station) ສາມາດເກັບຂໍ້ມູນໄດ້ຕະຫຼອດເວລາ, ມີຄວາມວ່ອງໄວ ແລະ ສະດວກສະບາຍຍິ່ງຂຶ້ນ ເບິ່ງຂໍ້ມູນແບບອອນໄລໄດ້.",
//       info3: "ນັກສຶກສາ ພາກວິຊາ ວິທະຍາສາດຄອມພິວເຕີ, ຄະນະວິທະຍາສາດທໍາມະຊາດ",
//       inputname: "Enter Name",
//       info4: "ສົກສຶກສາ 2019-2020",
//       info5: "ເພື່ອສ້າງລະບົບຕິດຕາມ ແລະ ຈັດເກັບຂໍ້ມູນສະພາບອາກາດແບບອອນໄລ",
//       info6: "ເພື່ອອໍານວຍຄວາມສະດວກໃນການຕິດຕາມ ແລະ ຈັດເກັບຂໍ້ມູນສະພາບອາກາດ",
//       info7:
//         "ເພື່ອສະດວກຕໍ່ການນໍາເອົາຂໍ້ມູນໄປໃຊ້ເຮັດບົດລາຍງາຍ ຫຼື ບົດວິໄຈອື່ນໆທີ່ກ່ຽວຂ້ອງ",
//       info8: "ເພື່ອປະຍັດເວລາໃນການຄົ້ນຫາຂໍ້ມູນສະພາບອາກາດທີ່ຜ່ານມາ",
//       inputlastname: "Enter Lastname",
//       inforProject: "ຂໍ້ມູນໂຄງການ",
//       invite: "ເພີ່ມເຂົ້າ",
//       //j//
//       //k//
//       weekly: "ອາທິດນີ້",
//       //l//
//       lastname: "ນາມສະກຸນ",
//       Localtion_Project: "ຈຸດພິກັດຂອງໂຄງການ",
//       login: "ເຂົ້າສູ່ລະບົບ",
//       logout: "ອອກຈາກລະບົບ",
//       lange: "Change to English",
//       //m//
//       monthly: "ເດືອນນີ້",
//       maps: "ແຜນທີ່",
//       my_profile: "ຂໍ້ມູນປະຈໍາຕົວ",
//       management: "ການຈັດການ",
//       main: "ໜ້າຫຼັກ",
//       mamber_management: "ການຈັດການສະມາຊິກຂອງໂຄງການ",
//       member_of: "ຊະມາຊິກຂອງໂຄງການ",
//       //n//
//       name: "ຊື່",
//       name_tack: "ໃສ່ຊື່ການຕິດຕາມ",
//       notifications: "ການແຈ້ງເຕືອນ",
//       //o//
//       other: "ອື່ນໆ",
//       one_hours: "ຂໍ້ມູນທຸກຊົ່ວໂມງ",
//       or: "ຫຼື",
//       //p//
//       purpose: "ຈຸດປະສົງ",
//       password: "ລະຫັດຜ່ານ",
//       pages: "ໜ້າ",
//       pin: "ຂາ",
//       project: "ໂຄງການ",
//       project_dashboard: "Project Dashboard",
//       projects_management: "ການຈັດການ ໂຄງການ",
//       project_track: "ການຕິດຕາມ ໂຄງການ",
//       password_less6: "ລະຫັດຜ່ານ (ຢ່າງໜ້ອຍ 6 ຕົວ)",
//       projects_name: "ຊື່ ໂຄງການ",
//       projects_devices: "ອຸປະກອນທີ່ມີໃນໂຄງການ",

//       //q//
//       //r//
//       report: "ລາຍງານ",
//       role: "ສິດ",
//       register: "ສະໝັກສະມາຊິກ",
//       readall: "ອ່ານທັງໝົດ",
//       //s//
//       student_depart: "ນັກສຶກສາ (ຄກສ)",
//       signup: "ລົງທະບຽນ",
//       status: "ສະຖານະ",
//       search: "ຄົ້ນຫາ",
//       settings: "ຕັ້ງຄາ່",
//       superadmin: "Super Admin",
//       save: "ບັນທຶກ",
//       select_head_track: "ເລືອກຫົວຂໍ້ຂໍ້ມູນທີ່ຈະຕິດຕາມ",
//       select_option: "ເລືອກ Option",
//       select_action: "ເລືອກ ການກະທໍາ",
//       selece_role: "ເລືອກສິດ",
//       selecet_project: "ເລືອກໂຄງການ",
//       select_time: "ເລືອກວັນທີ:",
//       show_data: "ສະແດງຂໍ້ມູນ",
//       startdate: "ວັນທີເລີ່ມຕົ້ນ",
//       //t//
//       topic: "ຫົວຂໍ້ລະບົບ",
//       topic_system: "ລະບົບຕິດຕາມ ແລະ ຈັດເກັບຂໍ້ມູນສະພາບອາກາດຂອງຄະນະກະເສດສາດ",
//       tel_need: "ເບີໂທລະສັບ (20xxxxxxxx)",
//       teacher_depart: "ຄູອາຈານ (ຄກສ)",
//       today: "ມື້ນີ້",
//       tableview: "ສະແດງຕາຕະລາງ",
//       tables: "ຕາຕະລາງ",
//       track_data: "ການຕິດຕາມຂໍ້ມູນ",
//       time_work: "ໄລຍະເວລາການເຮັດວຽກ (ວິນາທີ)",
//       time_sleep: "ໄລຍະເວລາການຜັກຜ່ອນ (ວິນາທີ)",
//       track_name: "ຊື່ການຕິດຕາມ",
//       //u//
//       username: "ຊື່ຜູ້ໃຊ້",
//       users: "ຜູ້ໃຊ້",
//       unit: "ຫົວໜ່ວຍ",
//       users_report: "ລາຍງານ ຜູ້ໃຊ້",
//       update: "ແກ້ໄຂ",
//       //v//

//       //w//
//       //x//
//       //y//
//       your_project: "ໂຄງການຂອງເຈົ້າ"
//       //z//
//     },
//   },
// };

// export default new VueI18n({
//   locale: process.env.VUE_APP_I18N_LOCALE || localStorage.getItem("lange"),
//   messages,
// });

// export default new VueI18n({

//   locale:
// })