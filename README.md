# BB-Arg H1 Scope Retriever

![Vista Principal](src/assets/images/main_screen.png)

BB-Arg H1 Scope Retriever es una extensión de navegador que facilita la obtención de los detalles de alcance de los programas de HackerOne. Con esta herramienta, puedes buscar y descargar fácilmente los dominios disponibles para pruebas dentro de los programas de bug bounty.

## Instalación

### Opción 1: Descargar desde Releases

1. **Descargar la Extensión Compilada**

   - Ve a la [página de Releases](https://github.com/tuusuario/bb-arg-h1-scope-retriever/releases) del repositorio
   - Descarga la última versión disponible para tu navegador:
     - Para Chrome/Edge: Archivo `.zip` o carpeta `dist`
     - Para Firefox: Archivo `.xpi` (si está disponible)

2. **Instalar en el Navegador**
   - **Chrome/Edge**:
     - Extrae el archivo descargado (si es un `.zip`)
     - Sigue los pasos de instalación en modo desarrollador que se indican abajo
   - **Firefox**:
     - Si descargaste un `.xpi`, haz doble clic sobre él o arrástralo a la ventana de Firefox para instalarlo
     - Si descargaste la carpeta `dist`, sigue los pasos de instalación temporal que se indican abajo

### Opción 2: Instalación Manual (Compilando)

#### Google Chrome / Edge (Modo Desarrollador)

1. **Descargar o Clonar el Repositorio**
   ```sh
   git clone https://github.com/tuusuario/bb-arg-h1-scope-retriever.git
   cd bb-arg-h1-scope-retriever
   ```
2. **Compilar la Extensión**

   - Asegúrate de tener instalado `pnpm` y las dependencias:
     ```sh
     pnpm install
     pnpm run build
     ```
   - Esto generará los archivos necesarios en la carpeta `dist/`.

3. **Cargar la Extensión en el Navegador**
   - Abre Chrome y ve a `chrome://extensions/`.
   - Habilita el **Modo Desarrollador** (esquina superior derecha).
   - Haz clic en **Cargar extensión sin empaquetar** y selecciona la carpeta `dist/`.
   - La extensión se añadirá y estará lista para usarse.

#### Firefox (Modo Desarrollador)

1. **Descargar o Clonar el Repositorio** (mismo paso que en Chrome).
2. **Compilar la Extensión** (mismo paso que en Chrome).
3. **Cargar la Extensión Temporalmente** (solo para pruebas)

   - Abre Firefox y ve a `about:debugging#/runtime/this-firefox`.
   - Haz clic en **Cargar complemento temporal**.
   - Selecciona el archivo `manifest.json` dentro de la carpeta `dist/`.
   - La extensión estará lista para usarse hasta que cierres el navegador.

4. **Instalación Permanente en Firefox (Opcional)**
   - Instala `web-ext` si no lo tienes:
     ```sh
     pnpm add -g web-ext
     ```
   - Empaqueta la extensión en un archivo `.xpi`:
     ```sh
     pnpm exec web-ext build
     ```
   - Esto generará un archivo `.xpi` dentro de `web-ext-artifacts/`.
   - Para Firefox Developer Edition:
     - Abre `about:config` y busca `xpinstall.signatures.required`.
     - Establécelo en `false` para permitir la instalación sin firmar.
     - Ve a `about:addons`, haz clic en **Instalar complemento desde archivo** y selecciona el `.xpi`.
   - Para una instalación oficial y firmada, sube el `.xpi` a [addons.mozilla.org](https://addons.mozilla.org/developers/).

## Uso

1. **Configura la API Key**
   - Agrega tu API Key de HackerOne en la configuración de la extensión.
2. **Buscar Programas**

   - Ingresa tu handle de HackerOne y selecciona un programa del listado.

3. **Descargar el Alcance**
   - Al hacer clic en un programa, la extensión recuperará los activos disponibles y generará un archivo `.txt` con los dominios en alcance.

## Contribuciones

Si deseas contribuir al desarrollo, por favor:

- Crea un **fork** del repositorio.
- Crea una nueva **rama** (`feature/nueva-funcionalidad`).
- Realiza un **pull request** cuando esté lista la mejora.

## Licencia

Este proyecto está bajo la licencia MIT.
