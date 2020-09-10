import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { calculateAggregateRankings } from "../helpers/rankingCalculation";

/**
 *  DESCRIPTION:
 *  PROPS: 
 *  FLOW: 
 *  PARENT: 
 *  CHILDREN: 
 */


function RankingsForm({ rankings }) {

  const aggregateRankings = (r) = calculateAggregateRankings(r);


  return (
    <div>
     <Formik
       initialValues={{ price: rankings.rankings_price || '',
                        location: rankings.rankings_location || '',
                        space: rankings.rankings_space || '',
                        privacy: rankings.rankings_privacy || '',
                        laundry: rankings.rankings_laundry || '',
                        parking: rankings.rankings_parking || '',
                        commonSpace : rankings.rankings_common_space || ''
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

        // <div className="rankingInputContainer">
        // <label>Aggregate Score</label>
        // {}
        // </div>
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