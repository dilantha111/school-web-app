import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { object, string, number } from 'yup';
import { Formik } from 'formik';
import { addNewSchool, School } from '../../services/school-service';
import './index.scss';

interface Props {
  show: Boolean,
  onHide: () => void,
  onSuccss: () => void,
  onFailure: (error: string) => void,
};

const schema = object({
  schoolName: string().required(),
  numberOfStudents: number().required(),
  street: string().required(),
  suburb: string().required(),
  postcode: number().required(),
  state: string().required(),
});

const AddNewSchoolModal: React.FunctionComponent<Props> = ({show, onHide, onFailure, onSuccss}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New School
            </Modal.Title>
      </Modal.Header>

      <Formik
        validationSchema={schema}
        onSubmit={async (value, actions) => {
          actions.setSubmitting(true);
          
          try {
            await addNewSchool(value as School);
            actions.setSubmitting(false);
            onSuccss();
          } catch (error) {
            onFailure(error.message);
          }
        }}
        initialValues={{
          schoolName: '',
          numberOfStudents: '',
          street: '',
          suburb: '',
          postcode: '',
          state: '',
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors,
          isSubmitting
        }) => (
            <Form onSubmit={handleSubmit}>
              <Modal.Body>
                <Form.Group>
                  <Form.Label> School Name </Form.Label>
                  <Form.Control
                    name="schoolName"
                    value={values.schoolName}
                    onChange={handleChange}
                    isValid={touched.schoolName && !errors.schoolName}
                    isInvalid={touched.schoolName && !!errors.schoolName}
                    type="text" placeholder="Enter school name"
                  />
                  <Form.Control.Feedback type="invalid">
                    school name is a required field
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Number of students</Form.Label>
                  <Form.Control
                    name="numberOfStudents"
                    value={values.numberOfStudents}
                    onChange={handleChange}
                    isValid={touched.numberOfStudents && !errors.numberOfStudents}
                    isInvalid={touched.numberOfStudents && !!errors.numberOfStudents}
                    type="number" placeholder="Enter number of students"
                  />
                  <Form.Control.Feedback type="invalid">
                    Number of students is a required field
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="address-group">
                  <Form.Group>
                    <Form.Label> Street </Form.Label>
                    <Form.Control
                      name="street"
                      value={values.street}
                      onChange={handleChange}
                      isValid={touched.street && !errors.street}
                      isInvalid={touched.street && !!errors.street}
                      type="text" placeholder="18, cross street"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.street}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label> Suburb </Form.Label>
                    <Form.Control
                      name="suburb"
                      value={values.suburb}
                      onChange={handleChange}
                      isValid={touched.suburb && !errors.suburb}
                      isInvalid={touched.suburb && !!errors.suburb}
                      type="text" placeholder="Brisbane"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.suburb}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label> Postcode </Form.Label>
                    <Form.Control
                      name="postcode"
                      value={values.postcode}
                      onChange={handleChange}
                      isValid={touched.postcode && !errors.postcode}
                      isInvalid={touched.postcode && !!errors.postcode}
                      type="number" placeholder="3000"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.postcode}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label> State </Form.Label>
                    <Form.Control
                      name="state"
                      value={values.state}
                      onChange={handleChange}
                      isValid={touched.state && !errors.state}
                      isInvalid={touched.state && !!errors.state}
                      type="text" placeholder="New South Wales"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.state}
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>

              </Modal.Body>
              <Modal.Footer>
                <Button type="submit" disabled={isSubmitting}>Submit</Button>
              </Modal.Footer>
            </Form>
          )
        }
      </Formik>
    </Modal>
  );
};

export default AddNewSchoolModal;