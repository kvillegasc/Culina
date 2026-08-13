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

Avance 3 — Funcionalidad e Interactividad

En este avance se implementó la funcionalidad e interactividad de la plataforma Culina mediante JavaScript, transformando la interfaz desarrollada en los avances anteriores en una aplicación web funcional.

Funcionalidades implementadas
* Búsqueda dinámica de recetas.
* Filtrado de recetas por categorías y presupuesto.
* Sistema de favoritos.
* Visualización del detalle de las recetas.
* Navegación entre las diferentes secciones de la plataforma.
* Menú de navegación responsive con botón hamburguesa.
* Apertura y cierre del menú en dispositivos pequeños.
* Adaptación de la navegación según el tamaño de pantalla.
* Mensajes interactivos para proporcionar retroalimentación al usuario.
* Manipulación dinámica del contenido mediante JavaScript.
* Actualización dinámica de resultados y cantidad de recetas mostradas.
* Tecnologías utilizadas
* JavaScript para la lógica e interactividad.
* HTML5 para la estructura de los elementos dinámicos.
* CSS3 para los estados visuales y diseño responsive.
Resultado

Con este avance, Culina pasó de ser una interfaz estática a una plataforma frontend funcional, donde las acciones del usuario producen respuestas dinámicas y la experiencia se adapta tanto a computadoras como a dispositivos móviles.

# Instalación y ejecución

Para ejecutar el proyecto de forma local, siga los siguientes pasos:

1. Clonar el repositorio:

```bash
git clone https://github.com/kvillegasc/Culina.git
```

2. Ingresar a la carpeta del proyecto:

```bash
cd Culina
```

3. Abrir el proyecto en Visual Studio Code.

4. Instalar la extensión **Live Server** (si aún no está instalada).

5. Abrir el archivo `index.html`.

6. Hacer clic derecho sobre `index.html` y seleccionar:

```
Open with Live Server
```

El proyecto se abrirá automáticamente en el navegador predeterminado.

---

## Estructura del proyecto

```
Culina/
│
├── assets/
│   ├── css/
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   └── responsive.css
│   │
│   ├── images/
│   └── icons/
│
├── pages/
│   ├── dashboard-user.html
│   ├── dashboard-chef.html
│   ├── search.html
│   ├── recipe.html
│   ├── favorites.html
│   └── create-recipe.html
│
├── docs/
│
├── index.html
│
└── README.md
```

---

## Tecnologías utilizadas

- HTML5
- CSS3
- Flexbox
- CSS Grid
- Responsive Design
- Font Awesome
- Google Fonts (Poppins)

---

## Funcionalidades implementadas

### Usuario

- Inicio de sesión.
- Explorar recetas.
- Buscar recetas.
- Ver detalle de una receta.
- Guardar recetas favoritas.

### Chef

- Panel del chef.
- Crear nuevas recetas.
- Gestionar recetas publicadas.

---

## Estado del proyecto

Este proyecto corresponde al **Avance II** del curso **Diseño y Programación Web** y representa la implementación del frontend basada en los wireframes desarrollados durante el Avance I.

---

## Nota para la docente

Debido a situaciones personales y a una falta de organización de mi parte, no logré entregar el Avance I en la fecha establecida. Por ello presento ambos avances en esta entrega. Ofrezco una disculpa por mi irresponsabilidad y agradezco su comprensión. Me comprometo a mantener un mayor compromiso y dedicación con el curso en adelante.
