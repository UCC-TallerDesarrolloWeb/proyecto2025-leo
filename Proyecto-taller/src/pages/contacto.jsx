import { useState, useEffect } from "react";
import Input from "@components/Input";
import "@styles/contacto.scss";

const STORAGE_KEY = "contactForm";

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  // ✅ Cargar datos guardados al iniciar
  useEffect(() => {
    const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedForm) setForm(savedForm);
  }, []);

  // ✅ Guardar cambios en localStorage en tiempo real
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    validate();
  }, [form]);

  const validate = () => {
    let newErrors = {};

    if (!form.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";

    if (!form.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Formato de email inválido";
    }

    if (form.mensaje.trim().length < 10)
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) return;

    alert("Formulario enviado ✅");
    
    // ✅ Limpiar todo al enviar
    setForm({ nombre: "", email: "", mensaje: "" });
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <section className="contacto-page">
      <h1>Contacto</h1>

      <form onSubmit={handleSubmit}>
        <Input 
          label="Tu Nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          error={errors.nombre}
        />

        <Input 
          label="Tu Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />

        <div className="form-control">
          <label htmlFor="mensaje">Tu Mensaje</label>
          <textarea 
            id="mensaje"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            aria-invalid={!!errors.mensaje}
          />
          {errors.mensaje && <p className="error">{errors.mensaje}</p>}
        </div>

        <button disabled={!isValid} type="submit">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contacto;
