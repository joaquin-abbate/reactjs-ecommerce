import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc, Firestore } from "firebase/firestore";

import { auth } from "../firebase.config";
import { storage } from "../firebase.config";
import { db } from "../firebase.config";

import { toast } from "react-toastify";

import "../styles/login.css";

import { useNavigate } from "react-router-dom";

const Singup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const singup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // Actualizar perfil
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });
            //  Data del usuario en la bd de Firestore
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );

      setLoading(false);
      toast.success("Cuenta creada");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error("Algo salió mal");
    }
  };

  return (
    <Helmet title="Singup">
      <section>
        <Container className="container__login">
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">Cargando...</h5>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4">Registrarse</h3>

                <Form className="auth__form" onSubmit={singup}>
                  <FormGroup className="form__group">
                    <input
                      type="text"
                      placeholder="Ingresa tu nombre de usuario"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input
                      type="email"
                      placeholder="Ingresa tu mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input
                      type="password"
                      placeholder="Ingresa tu contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup className="form__group file">
                    <label htmlFor="archivo" id="labelArchivo">
                      Elige un archivo
                    </label>
                    <input
                      type="file"
                      onChange={(e) => {
                        const fileName = e.target.files[0].name;
                        document.getElementById("labelArchivo").innerText =
                          fileName;
                        setFile(e.target.files[0]);
                      }}
                      id="archivo"
                    />
                  </FormGroup>

                  <button type="sumbit" className="auth__btn buy__btn">
                    Create una cuenta
                  </button>
                  <p>
                    Ya tienes cuenta? <Link to="/login">Logeate aqui!</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Singup;
