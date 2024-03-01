const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@des Get All contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHandler(async (req, resp) => {
  const contacts = await Contact.find();
  resp.status(200).json(contacts);
});

//@des Create New contacts
//@route Post /api/contacts
//@access Public
const createContact = asyncHandler(async (req, resp) => {
  console.log("body param are : ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    resp.status(400);
    throw new Error("All feild are required!");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  resp.status(201).json(contact);
});

//@des get Indiviual contacts
//@route Get /api/contacts/:id
//@access Public
const getContact = asyncHandler(async (req, resp) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    resp.status(404);
    throw new Error("Contact Not Found");
  }
  resp.status(200).json(contact);
});

//@des PUT update Contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async (req, resp) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    resp.status(404);
    throw new Error("Contact Not Found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  resp.status(200).json(updatedContact);
});

//@des Delete  Contact
//@route Delete /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "Contact deleted" });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
