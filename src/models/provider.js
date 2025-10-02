import db from "../firebase";
import { collection } from "firebase/firestore";

// Colección de proveedores en Firestore
export const providerCollection = collection(db, "providers");

/**
 * Modelo base de proveedor según requerimientos del CRUD:
 * name: Nombre del proveedor
 * nit: NIT / Identificación
 * phone: Teléfono
 * email: Correo electrónico
 * address: Dirección
 * cityCountry: Ciudad / País
 * category: Categoría
 * description: Descripción
 * status: Estado (Activo/Inactivo)
 */
export const providerModel = {
    name: "",
    nit: "",
    phone: "",
    email: "",
    address: "",
    cityCountry: "",
    category: "",
    description: "",
    status: "Activo",
};