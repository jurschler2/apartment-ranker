import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ApartmentRankerAPI from "../api/API";
import { addApartmentToAPI } from "../reducer/actions";
import ItemCard from "./ItemCard";

/**
 *  DESCRIPTION:
 *  PROPS: 
 *  FLOW: 
 *  PARENT: 
 *  CHILDREN: 
 */


function NewApartmentForm() {


  const dispatch = useDispatch()
  // const [apartment, setApartment] = useState();

  // const renderApartment = () => {

  //   return (

  //     <ItemCard address={apartment.address}
  //     price={apartment.price}
  //     url={apartment.url}
  //     pics={apartment.pics} />
  //     )
  // }

  return (
    <div>
     <Formik
       initialValues={{ url: ''
                      }}
       validate={values => {
         const errors = {};
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(async () => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(true);
          //  const response = await ApartmentRankerAPI.addApartment(values.url);
           dispatch(addApartmentToAPI(values.url))
           setSubmitting(false);

         }, 4000);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <label>Add an apartment</label>
           <Field type="text" name="url" placeholder="https://exloc.craigslist.org/exloc/ex/ex/example-listing/99999999.html" />
           <ErrorMessage name="url" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
     {/* {apartment ? renderApartment() : null} */}
   </div>
 );
}

export default NewApartmentForm;