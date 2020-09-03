import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

/**
 *  DESCRIPTION:
 *  PROPS: 
 *  FLOW: 
 *  PARENT: 
 *  CHILDREN: 
 */


function RankingsForm({ rankings }) {


  return (
    <div>
     <Formik
       initialValues={{ price: '',
                        location: '',
                        space: '',
                        privacy: '',
                        laundry: '',
                        parking: '',
                        commonSpace : ''
                      }}
       validate={values => {
         const errors = {};
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           
           <div className="rankingInputContainer">
            <label>Price</label>
            <Field type="number" name="price" />
            <ErrorMessage name="price" component="div" />
           </div>
           <div className="rankingInputContainer">
            <label>Location</label>
            <Field type="number" name="location" />
            <ErrorMessage name="location" component="div" />
           </div>
           <div className="rankingInputContainer">
            <label>Space</label>
            <Field type="number" name="space" />
            <ErrorMessage name="space" component="div" />
           </div>
           <div className="rankingInputContainer">
            <label>Privacy</label>
            <Field type="number" name="privacy" />
            <ErrorMessage name="privacy" component="div" />
           </div>
           <div className="rankingInputContainer">
            <label>Laundry</label>
            <Field type="number" name="laundry" />
            <ErrorMessage name="laundry" component="div" />
           </div>
           <div className="rankingInputContainer">
            <label>Parking</label>
            <Field type="number" name="parking" />
            <ErrorMessage name="parking" component="div" />
           </div>
           <div className="rankingInputContainer">
            <label>Common Space</label>
            <Field type="number" name="commonSpace" />
            <ErrorMessage name="commonSpace" component="div" />
           </div>
           <div className="btn">
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
           </div>
         </Form>
       )}
     </Formik>
   </div>
 );
}

export default RankingsForm;