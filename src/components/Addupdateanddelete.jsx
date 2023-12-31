import { ErrorMessage, Field, Form, Formik } from "formik";
import Model from "./Model";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";
const Addupdateanddelete = ({ contact,isupdate,isopen,onclose }) => {

    // const {isopen, onclose,onopen}=usedclose();
    const contactschemavalidation=Yup.object().shape({
        name:Yup.string().required("Name is required"),
        email:Yup.string().email("Email is invalid").required("Email is required"),
    })
    const addcontact=async(values)=>{
        try {
            const contactref=collection(db,"contact");
            await addDoc(contactref,values);
            onclose();
            toast.success("contact added succsessfully");

        } catch (error) {
            console.log(error)
        }
    }

    const upadtecontact=async(values,id)=>{
        try {
            const contactref=doc(db,"contact",id);
            await updateDoc(contactref,values)
           onclose();
           toast.success("contact updated succsessfully");

        } catch (error) {
            console.log(error)
        }
    }


  return (
    <>
      <Model isopen={isopen} onclose={onclose}>
        <Formik
        validationSchema={contactschemavalidation}
          initialValues={
            isupdate?{
                name:contact.name,
                email:contact.email,
            }
            :{
            name: "",
            email: "",
            }}
          onSubmit={(values)=>{
            isupdate?upadtecontact(values,contact.id):addcontact(values);
          }}
        >
          <Form className="flex flex-col">
            <div className="flex flex-col gap-2">
              <label htmlFor="Name">Name</label>
              <Field className="border h-10 rounded-md p-3" name="name" />
                <div className="text-red-500 text-sm">
                    <ErrorMessage name="name"/>
                </div>
              <label htmlFor="Email">Email</label>
              <Field className="border rounded-md h-10" name="email" />
              <div className="text-red-500 text-sm">
                    <ErrorMessage name="email"/>
                </div>
              <button type="submit" className="bg-orange mt-2 self-end px-3 py-1.5 border">
                {isupdate?"Update":"Add"} Contact
              </button>
            </div>
          </Form>
        </Formik>
      </Model>
    </>
  );
};

export default Addupdateanddelete;
