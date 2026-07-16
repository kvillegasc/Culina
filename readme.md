# Culina 

## Nota para la docente

Estimada profesora Stephanie:

Antes de presentar este proyecto, quisiera ofrecer una sincera disculpa por no haber realizado la entrega del primer avance dentro del plazo establecido. Durante las últimas semanas se presentaron algunas situaciones personales que afectaron mi organización y el tiempo que pude dedicarle al curso, lo que provocó este atraso.

Con el objetivo de ponerme al día y continuar con el desarrollo del proyecto, en esta entrega se incluyen de manera integrada el **Avance I** y el **Avance II**. Reconozco que debí mantener un seguimiento más constante de la asignatura y asumo la responsabilidad correspondiente.

Agradezco mucho su comprensión y el tiempo dedicado a revisar este trabajo. Me comprometo a mejorar mi organización, mantener una participación más constante y continuar desarrollando el proyecto con mayor responsabilidad durante las siguientes etapas del curso.

Atentamente,
**Kate Villegas Coto**

---

# Descripción del proyecto

**Culina** es una plataforma web interactiva orientada al descubrimiento, organización y creación de recetas culinarias. Su objetivo es facilitar que los usuarios encuentren nuevas preparaciones según sus ingredientes disponibles, preferencias y necesidades, mientras permite a expertos culinarios compartir y administrar contenido gastronómico.

El proyecto busca crear una experiencia intuitiva y organizada, donde la exploración de recetas sea sencilla y personalizada mediante una interfaz moderna y accesible.

---

# Integrante

| Nombre             | Rol                                               |
| ------------------ | ------------------------------------------------- |
| Kate Villegas Coto | Desarrollo Frontend, Diseño UX/UI y Documentación |

---

# Alcance del proyecto

El sistema contempla dos tipos principales de usuarios:

## Usuario regular

El usuario podrá:

* Explorar diferentes recetas culinarias.
* Buscar recetas mediante filtros.
* Consultar detalles de preparación e ingredientes.
* Guardar recetas favoritas.
* Crear notas o modificaciones personales sobre recetas.
* Consultar recomendaciones personalizadas.

## Chef / Experto culinario

El chef podrá:

* Crear y publicar nuevas recetas.
* Administrar información de ingredientes.
* Registrar costos y tiempos de preparación.
* Organizar recetas por categorías.
* Gestionar el contenido gastronómico publicado.

---

# Tecnologías utilizadas

El proyecto será desarrollado utilizando tecnologías frontend:

* HTML5
* CSS3
* JavaScript

Herramientas utilizadas:

* Figma para diseño de wireframes.
* Git y GitHub para control de versiones.

---

# Estructura del proyecto

```
Culina
│
├── README.md
│
├── docs
│   └── wireframes.pdf
│
├── index.html
│
├── css
│   └── style.css
│
├── js
│   └── script.js
│
└── assets
    ├── images
    └── icons
```

---

# Wireframes

Los wireframes del proyecto se encuentran en:

```
docs/wireframes.pdf
```

Estos representan las principales funcionalidades del sistema y la navegación entre los dos tipos de usuario contemplados:

* Usuario regular.
* Chef / Experto culinario.

---

# Estrategia de trabajo con Git

El desarrollo del proyecto se organizará mediante control de versiones utilizando Git y GitHub.

## Branches

### Main

Contendrá las versiones estables y listas para entrega del proyecto.

### Development

Será utilizada para integrar los avances generales antes de pasar a la versión estable.

### Feature

Se utilizarán ramas específicas para desarrollar nuevas funcionalidades.

Formato:

```
feature/nombre-funcionalidad
```

Ejemplo:

```
feature/login
feature/recetas
feature/dashboard-chef
```

---

# Convención de commits

Los commits seguirán una estructura descriptiva:

| Tipo     | Uso                                 |
| -------- | ----------------------------------- |
| feat     | Nueva funcionalidad                 |
| fix      | Corrección de errores               |
| style    | Cambios visuales o estilos          |
| docs     | Actualización de documentación      |
| refactor | Mejoras en la estructura del código |

Ejemplos:

```
feat: agrega sistema de búsqueda de recetas

style: mejora diseño de tarjetas

docs: actualiza documentación del proyecto
```

---

# Estado del proyecto

## Avance I

* Documentación inicial del proyecto.
* Definición de usuarios y alcance.
* Diseño de wireframes.
* Estructura inicial del repositorio.

## Avance II

* Desarrollo de interfaz frontend.
* Implementación de estilos.
* Programación de funcionalidades con JavaScript.
* Integración de componentes interactivos.
