const express = require("express");
const router = express.Router();

//first we create pattren like this

// router.route("/").get((req, resp) => {
//   resp.status(200).json({ message: "Getting all Contact" });
// });

const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controller/contactController");

//getting all contact
router.route("/").get(getContacts);

//craete a new contact
router.route("/").post(createContact);

//getting a indiviual contact
router.route("/:id").get(getContact);

//update contact
router.route("/:id").put(updateContact);

//delete contact
router.route("/:id").delete(deleteContact);

module.exports = router;
