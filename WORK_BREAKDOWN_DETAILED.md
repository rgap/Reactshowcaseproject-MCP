# 📋 Work Breakdown Structure - Tareas Detalladas

## Proyecto: React Showcase Project

**Equipo:** Dev A, Dev B, Dev C  
**Metodología:** Desarrollo en Paralelo con Vertical Slices  
**Total Tareas:** 30 tareas

---

## 📖 Índice

- [Dev A: Foundation & Home](#dev-a-foundation--home) (11 tareas)
- [Dev B: Tic-Tac-Toe](#dev-b-tic-tac-toe) (7 tareas)
- [Dev C: Poke Collection](#dev-c-poke-collection) (12 tareas)

---

# 🔵 DEV A: Foundation & Home

## Tarea A1: Project Setup

**Title:** Project Setup - Inicializar Vite + React + TypeScript

**Assignee:** Dev A

**Status:** Todo

**Priority:** P0

**Labels:** foundation, setup

### Description

Inicializar proyecto desde cero con Vite, React 18, TypeScript en modo strict y todas las dependencias necesarias.

### 📁 Archivos a Crear:

```
├── package.json
├── package-lock.json (generado)
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── index.html
├── .eslintrc.cjs
├── .gitignore
├── src/main.tsx
├── src/App.tsx
└── src/vite-env.d.ts (generado)
```

### ✅ Acceptance Criteria:

1. **Estructura de proyecto:**

   - [ ] Proyecto inicializado con `npm create vite@latest . -- --template react-ts`
   - [ ] package.json contiene:
     - react: "18.2.0"
     - react-dom: "18.2.0"
     - react-router-dom: "6.22.0"
     - typescript: "5.2.2"
     - vite: "5.1.4"

2. **TypeScript configurado:**

   - [ ] tsconfig.json tiene "strict": true
   - [ ] tsconfig.json incluye "noUnusedLocals": true
   - [ ] tsconfig.json incluye "noUnusedParameters": true
   - [ ] tsconfig.json tiene "jsx": "react-jsx"

3. **Vite configurado:**

   - [ ] vite.config.ts importa @vitejs/plugin-react
   - [ ] plugins: [react()] configurado

4. **ESLint configurado:**

   - [ ] .eslintrc.cjs creado con reglas de React
   - [ ] Reglas de react-hooks configuradas

5. **Git configurado:**

   - [ ] .gitignore incluye node_modules/, dist/, .env

6. **Scripts funcionando:**

   - [ ] npm install ejecutado sin errores
   - [ ] npm run dev inicia servidor en http://localhost:5173
   - [ ] npm run build compila sin errores
   - [ ] npm run lint ejecuta sin errores

7. **Archivos base:**
   - [ ] index.html con `<div id="root"></div>`
   - [ ] src/main.tsx con ReactDOM.createRoot
   - [ ] src/App.tsx con componente básico
   - [ ] App.tsx exporta como named export: `export { App }`

### 🧪 Cómo Probar:

```bash
# 1. Verificar instalación
npm install
npm run dev
# Debe abrir http://localhost:5173 mostrando página básica

# 2. Verificar TypeScript strict
# Intentar crear variable sin tipo debe dar error
# src/App.tsx: const x = 5; x = "string"; // ERROR ✅

# 3. Verificar build
npm run build
# Debe crear carpeta dist/ sin errores

# 4. Verificar lint
npm run lint
# No debe haber errores
```

### 📦 Estructura Esperada Post-Tarea:

```
Reactshowcaseproject-MCP/
├── node_modules/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

**Estimate:** 4-6 horas (incluyendo setup inicial y resolución de problemas)

**Conflict Risk:** 0% - Primera tarea, no hay conflictos posibles

**Dependencies:** Ninguna - Tarea inicial

**Blockers:**

- Tener Node.js 18+ instalado
- Tener npm o yarn
- Conexión a internet para instalar dependencias

---

## Tarea A2: ITCSS Architecture

**Title:** ITCSS Architecture - Sistema CSS Completo

**Assignee:** Dev A

**Status:** Todo

**Priority:** P0

**Labels:** foundation, styles, css

### Description

Implementar arquitectura ITCSS completa con 4 capas: Settings (variables), Generic (reset), Elements (base), y archivo global de importación.

### 📁 Archivos a Crear:

```
├── src/styles/
│   ├── settings/
│   │   └── variables.css         # Design tokens
│   ├── generic/
│   │   └── reset.css             # CSS Reset
│   ├── elements/
│   │   └── base.css              # Base HTML elements
│   └── global.css                # Main import file
```

### 📝 Archivos a Modificar:

```
└── src/main.tsx                  # Agregar import './styles/global.css'
```

### ✅ Acceptance Criteria:

1. **variables.css (Design Tokens):**

   - [ ] Colores definidos:

     - --color-primary: #18181b
     - --color-secondary: #71717a
     - --color-white, --color-black
     - --color-gray-50 hasta --color-gray-900 (9 tonos)
     - --color-error, --color-success, --color-warning, --color-info

   - [ ] Spacing system definido:

     - --space-xs (0.25rem) hasta --space-3xl (4rem)
     - Mínimo 7 valores

   - [ ] Typography definida:

     - Font sizes: --font-size-xs hasta --font-size-4xl (8 valores)
     - Font weights: normal, medium, semibold, bold
     - Line heights: tight, normal, relaxed

   - [ ] Layout tokens:

     - Border radius: sm, md, lg, xl, full
     - Shadows: sm, md, lg, xl
     - Border widths: thin, medium, thick

   - [ ] Transitions:

     - --transition-fast: 150ms ease
     - --transition-base: 200ms ease
     - --transition-slow: 300ms ease

   - [ ] Z-index scale:

     - --z-dropdown: 100
     - --z-sticky: 200
     - --z-modal: 300
     - --z-tooltip: 500

   - [ ] Secciones comentadas para Dev B y Dev C:

     ```css
     /* === TIC-TAC-TOE (Dev B) === */
     /* Dev B: Add specific variables here */

     /* === POKE COLLECTION (Dev C) === */
     /* Dev C: Add specific variables here */
     ```

2. **reset.css (CSS Reset):**

   - [ ] Box-sizing: border-box en todos los elementos
   - [ ] Margin y padding: 0 en \*
   - [ ] html font-size: 16px
   - [ ] -webkit-font-smoothing: antialiased
   - [ ] img, video, canvas: max-width 100%, display block
   - [ ] button: reset de estilos nativos
   - [ ] ul, ol: list-style: none
   - [ ] a: text-decoration: none
   - [ ] @media (prefers-reduced-motion) configurado

3. **base.css (Base Elements):**

   - [ ] body con font-family system-ui
   - [ ] body con color y background desde variables
   - [ ] h1-h6 con font-weight y line-height desde variables
   - [ ] a con :hover y :focus-visible
   - [ ] input, textarea con estilos base desde variables
   - [ ] button con estilos base y :disabled

4. **global.css (Main Import):**

   - [ ] Importa en orden correcto:
     ```css
     @import "./settings/variables.css";
     @import "./generic/reset.css";
     @import "./elements/base.css";
     ```

5. **Integración:**
   - [ ] main.tsx importa './styles/global.css' ANTES de renderizar App
   - [ ] Estilos visibles en navegador (inspeccionar :root variables)
   - [ ] Reset aplicado (no hay margins por default)

### 🧪 Cómo Probar:

```bash
# 1. Verificar que archivos existen
ls -R src/styles/
# Debe mostrar: settings/, generic/, elements/, global.css

# 2. Iniciar dev server
npm run dev
```

```typescript
// 3. En navegador, inspeccionar elemento
// DevTools > Elements > :root
// Debe ver todas las CSS variables definidas

// 4. Crear componente de prueba temporal:
// src/App.tsx
function App() {
  return (
    <div
      style={{
        padding: "var(--space-xl)",
        backgroundColor: "var(--color-gray-100)",
      }}
    >
      <h1>CSS Variables Test</h1>
      <button
        style={{
          padding: "var(--space-md)",
          backgroundColor: "var(--color-primary)",
          color: "var(--color-white)",
          borderRadius: "var(--border-radius-md)",
          transition: "var(--transition-base)",
        }}
      >
        Test Button
      </button>
    </div>
  );
}
export { App };
```

```bash
# 5. Verificar en navegador:
# - Debe ver padding aplicado
# - Botón con colores correctos
# - Hover debe tener transición suave
```

### 📦 Estructura Esperada Post-Tarea:

```
src/
├── styles/
│   ├── settings/
│   │   └── variables.css    (150-200 líneas)
│   ├── generic/
│   │   └── reset.css        (80-100 líneas)
│   ├── elements/
│   │   └── base.css         (100-120 líneas)
│   └── global.css           (10-15 líneas)
├── App.tsx                  (modificado para testing)
└── main.tsx                 (modificado con import CSS)
```

### 📊 Métricas de Éxito:

- Líneas de CSS: ~400 líneas total
- Variables CSS: 80+ variables definidas
- 0 errores de sintaxis CSS
- Estilos visibles en DevTools

**Estimate:** 6-8 horas

**Conflict Risk:**

- 15% con Dev B (puede agregar variables de Tic-Tac-Toe)
- 15% con Dev C (puede agregar variables de Pokemon)
- **Mitigación:** Secciones comentadas claramente marcadas

**Dependencies:**

- Requiere A1 completada (proyecto inicializado)

**Blockers:** Ninguno

---

## Tarea A3: i18n System

**Title:** i18n System - Internacionalización Manual EN/ES

**Assignee:** Dev A

**Status:** Todo

**Priority:** P0

**Labels:** foundation, i18n, context

### Description

Construir sistema de internacionalización manual con React Context, archivos JSON de traducciones para inglés y español, y función de traducción t().

### 📁 Archivos a Crear:

```
├── src/locales/
│   ├── en.json                   # Traducciones inglés
│   └── es.json                   # Traducciones español
├── src/contexts/
│   ├── I18nContext.tsx           # Context + Provider
│   └── index.ts                  # Barrel export
```

### 📝 Archivos a Modificar:

```
└── src/main.tsx                  # Wrap con I18nProvider
```

### ✅ Acceptance Criteria:

1. **Estructura de Locale Files:**

   - [ ] src/locales/en.json creado con estructura:

     ```json
     {
       "// ========== HOME (Dev A) ==========": "",
       "home-title": "React Showcase Project",
       "home-subtitle": "My Mini Projects",
       "home-description": "A collection of React projects",
       "view-project": "View Project",
       "technologies": "Technologies",

       "// ========== NAVIGATION ==========": "",
       "nav-home": "Home",
       "nav-back": "Back",

       "// ========== TIC-TAC-TOE (Dev B) ==========": "",
       "// Dev B: Add your keys in this section": "",
       "// Example: next-player, reset-button, etc.": "",

       "// ========== POKE COLLECTION (Dev C) ==========": "",
       "// Dev C: Add your keys in this section": "",
       "// Example: search-pokemon, favorites, etc.": ""
     }
     ```

   - [ ] src/locales/es.json con mismas keys traducidas:
     ```json
     {
       "// ========== HOME (Dev A) ==========": "",
       "home-title": "Proyecto Showcase React",
       "home-subtitle": "Mis Mini Proyectos",
       "..."
     }
     ```

2. **I18nContext Implementation:**

   - [ ] Archivo src/contexts/I18nContext.tsx creado
   - [ ] Importa archivos JSON:

     ```typescript
     import en from "../locales/en.json";
     import es from "../locales/es.json";
     ```

   - [ ] Define tipos TypeScript:

     ```typescript
     type Language = "en" | "es";
     type TranslationKey = string;

     interface I18nContextType {
       language: Language;
       setLanguage: (lang: Language) => void;
       t: (key: TranslationKey) => string;
     }
     ```

   - [ ] Crea Context:

     ```typescript
     const I18nContext = createContext<I18nContextType | undefined>(undefined);
     ```

   - [ ] Implementa I18nProvider:

     - State para language (default: 'en')
     - localStorage persistence del idioma seleccionado
     - Función t(key) que retorna locale[language][key] || key
     - Provee { language, setLanguage, t } en context value

   - [ ] Exporta named exports:
     ```typescript
     export { I18nContext, I18nProvider };
     ```

3. **Custom Hook (opcional pero recomendado):**

   - [ ] Hook useI18n() que hace useContext(I18nContext)
   - [ ] Lanza error si se usa fuera del Provider
   - [ ] Export: `export { useI18n };`

4. **Barrel Export:**

   - [ ] src/contexts/index.ts exporta todo:
     ```typescript
     export { I18nContext, I18nProvider, useI18n } from "./I18nContext";
     ```

5. **Integración en App:**

   - [ ] main.tsx envuelve App con I18nProvider:
     ```typescript
     <I18nProvider>
       <App />
     </I18nProvider>
     ```

6. **Funcionalidad:**
   - [ ] Idioma persiste en localStorage como 'app-language'
   - [ ] Al cargar app, lee idioma de localStorage o default 'en'
   - [ ] Función t() retorna key si traducción no existe (fallback)
   - [ ] setLanguage actualiza state y localStorage

### 🧪 Cómo Probar:

```typescript
// 1. Crear componente de prueba en src/App.tsx
import { useI18n } from "./contexts";

function App() {
  const { language, setLanguage, t } = useI18n();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{t("home-title")}</h1>
      <p>{t("home-subtitle")}</p>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => setLanguage("en")}>English</button>
        <button onClick={() => setLanguage("es")}>Español</button>
      </div>

      <p>Current language: {language}</p>

      {/* Test fallback */}
      <p>Missing key: {t("nonexistent-key")}</p>
    </div>
  );
}

export { App };
```

```bash
# 2. En navegador:
# - Debe mostrar "React Showcase Project"
# - Click en "Español" debe cambiar a "Proyecto Showcase React"
# - Refresh page: debe mantener idioma seleccionado
# - Check localStorage en DevTools: debe tener 'app-language'
# - Missing key debe mostrar 'nonexistent-key' (fallback)

# 3. Verificar en DevTools > Application > Local Storage:
# - Key: app-language
# - Value: 'en' o 'es'
```

### 📦 Estructura Esperada Post-Tarea:

```
src/
├── locales/
│   ├── en.json              (20-30 keys iniciales)
│   └── es.json              (20-30 keys iniciales)
├── contexts/
│   ├── I18nContext.tsx      (80-100 líneas)
│   └── index.ts             (1 línea)
├── main.tsx                 (modificado)
└── App.tsx                  (con pruebas)
```

### 📊 Métricas de Éxito:

- 20+ translation keys por idioma
- localStorage persistence funciona
- Cambio de idioma instantáneo
- Fallback funciona para keys faltantes
- 0 errores TypeScript

**Estimate:** 6-8 horas

**Conflict Risk:**

- 50% con Dev B (agregará keys de Tic-Tac-Toe a locales/\*.json)
- 50% con Dev C (agregará keys de Poke Collection a locales/\*.json)
- **Mitigación:** Secciones claramente marcadas con comentarios

**Dependencies:**

- Requiere A1 (proyecto setup)

**Blockers:** Ninguno

**⚠️ Notas Importantes:**

- Dev B y Dev C agregarán sus keys en secciones específicas
- Usar comentarios como separadores (JSON ignora keys con "//")
- NO borrar secciones de otros devs al hacer merge

---

## Tarea A4: Utility cx.ts

**Title:** Utility cx.ts - Class Name Merger

**Assignee:** Dev A

**Status:** Todo

**Priority:** P0

**Labels:** foundation, utility

### Description

Crear función utility helper para combinar clases CSS dinámicamente, manejando condicionales y valores falsy.

### 📁 Archivos a Crear:

```
└── src/utils/
    └── cx.ts                     # Class merger utility
```

### ✅ Acceptance Criteria:

1. **Función cx implementada:**

   - [ ] Archivo src/utils/cx.ts creado
   - [ ] Función acepta parámetros variadic (...args)
   - [ ] Tipos TypeScript definidos:

     ```typescript
     type ClassValue = string | boolean | undefined | null;

     export function cx(...classes: ClassValue[]): string {
       return classes.filter(Boolean).join(" ");
     }
     ```

   - [ ] Filtra valores falsy (false, null, undefined)
   - [ ] Retorna string con clases separadas por espacios
   - [ ] Export como named export

2. **Documentación:**

   - [ ] JSDoc comment explicando uso:
     ```typescript
     /**
      * Combines CSS class names, filtering out falsy values
      *
      * @param classes - Variable number of class names or conditions
      * @returns Combined class string
      *
      * @example
      * cx('btn', isActive && 'btn--active', 'btn--primary')
      * // Returns: 'btn btn--active btn--primary' (if isActive is true)
      *
      * @example
      * cx('card', null, undefined, 'card--elevated')
      * // Returns: 'card card--elevated'
      */
     ```

3. **Casos de uso soportados:**
   - [ ] Múltiples strings: `cx('class1', 'class2')`
   - [ ] Condicionales: `cx('base', condition && 'modifier')`
   - [ ] Valores falsy: `cx('class', null, undefined, false)`
   - [ ] Mix: `cx('btn', isActive && 'active', disabled && 'disabled')`

### 🧪 Cómo Probar:

```typescript
// 1. Crear archivo de prueba: src/utils/cx.test.ts
import { cx } from "./cx";

// Test 1: Múltiples clases
console.log("Test 1:", cx("btn", "btn--primary"));
// Expected: 'btn btn--primary'

// Test 2: Con condicional true
const isActive = true;
console.log("Test 2:", cx("item", isActive && "item--active"));
// Expected: 'item item--active'

// Test 3: Con condicional false
const isDisabled = false;
console.log("Test 3:", cx("item", isDisabled && "item--disabled"));
// Expected: 'item'

// Test 4: Con null y undefined
console.log("Test 4:", cx("card", null, undefined, "card--elevated"));
// Expected: 'card card--elevated'

// Test 5: Caso complejo
const variant = "primary";
const size = "large";
const disabled = false;
console.log("Test 5:", cx("button", `button--${variant}`, `button--${size}`, disabled && "button--disabled"));
// Expected: 'button button--primary button--large'

// Test 6: Todo falsy
console.log("Test 6:", cx(null, undefined, false));
// Expected: ''

// Test 7: String vacío
console.log("Test 7:", cx("btn", "", "primary"));
// Expected: 'btn primary' (string vacío se filtra)
```

```typescript
// 2. Probar en componente real (src/App.tsx)
import { cx } from "./utils/cx";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isLarge, setIsLarge] = useState(false);

  const buttonClasses = cx("test-button", isActive && "test-button--active", isLarge && "test-button--large");

  return (
    <div style={{ padding: "2rem" }}>
      <button
        className={buttonClasses}
        onClick={() => setIsActive(!isActive)}
        style={{
          padding: isLarge ? "1rem 2rem" : "0.5rem 1rem",
          backgroundColor: isActive ? "#22c55e" : "#gray",
          color: "white",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer",
          transition: "all 0.2s",
        }}
      >
        Click me
      </button>

      <button onClick={() => setIsLarge(!isLarge)}>Toggle Size</button>

      <p>Classes applied: {buttonClasses}</p>

      {/* Inspect element to see class names */}
    </div>
  );
}

export { App };
```

```bash
# 3. Ejecutar tests en consola
npm run dev
# En DevTools console, copiar/pegar los tests
# Verificar todos los outputs sean correctos

# 4. Inspeccionar elemento del botón
# Debe ver clases dinámicas aplicándose al hacer click
```

### 📦 Estructura Esperada Post-Tarea:

```
src/
└── utils/
    ├── cx.ts                 (15-20 líneas)
    └── cx.test.ts            (opcional, 50-60 líneas)
```

### 📊 Métricas de Éxito:

- Función < 10 líneas de código
- Maneja 100% casos de uso mencionados
- 0 errores TypeScript
- Tests pasan correctamente

**Estimate:** 1-2 horas

**Conflict Risk:** 0% (archivo independiente, otros devs crearán sus propios utils)

**Dependencies:**

- Requiere A1 (proyecto setup)

**Blockers:** Ninguno

**💡 Tip:**
Esta utility será usada extensivamente por todos los devs en sus componentes con CSS Modules.

---

## Tarea A5: Button Component

**Title:** Button Component - Componente Reutilizable con BEM

**Assignee:** Dev A

**Status:** Todo

**Priority:** P0

**Labels:** component, shared, bem

### Description

Crear componente Button reutilizable siguiendo patrón BEM + CSS Modules con múltiples intents (primary, secondary), tamaños (small, medium, large), estados (disabled, loading), y soporte para iconos.

### 📁 Archivos a Crear:

```
└── src/components/Button/
    ├── Button.tsx                # Componente principal
    ├── Button.module.css         # Estilos BEM
    ├── Button.constants.ts       # Constantes de intent y size
    └── index.ts                  # Barrel export
```

### ✅ Acceptance Criteria:

1. **Button.constants.ts:**

   - [ ] Archivo creado con constantes:

     ```typescript
     export const INTENT = {
       PRIMARY: "primary",
       SECONDARY: "secondary",
       SUCCESS: "success",
       ERROR: "error",
     } as const;

     export const SIZE = {
       SMALL: "small",
       MEDIUM: "medium",
       LARGE: "large",
     } as const;

     export type IntentType = (typeof INTENT)[keyof typeof INTENT];
     export type SizeType = (typeof SIZE)[keyof typeof SIZE];
     ```

2. **Button.tsx - Interface y Props:**

   - [ ] Interface IButton definida:

     ```typescript
     import { INTENT, SIZE } from "./Button.constants";
     import type { IntentType, SizeType } from "./Button.constants";

     interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
       intent?: IntentType;
       size?: SizeType;
       disabled?: boolean;
       loading?: boolean;
       icon?: React.ReactNode;
       children?: React.ReactNode;
       className?: string;
     }
     ```

   - [ ] Componente funcional con valores por defecto:
     ```typescript
     function Button({
       intent = INTENT.PRIMARY,
       size = SIZE.MEDIUM,
       disabled = false,
       loading = false,
       icon,
       children,
       className = "",
       ...props
     }: IButton) {
       // Implementation
     }
     ```

3. **Button.tsx - Lógica de Clases BEM:**

   - [ ] Usa utility cx() para combinar clases
   - [ ] Composición de clases BEM:

     ```typescript
     import { cx } from "../../utils/cx";
     import styles from "./Button.module.css";

     const buttonClasses = cx(
       styles.button, // Block
       styles[`button--${intent}`], // Intent modifier
       styles[`button--${size}`], // Size modifier
       disabled && styles["button--disabled"], // State modifier
       loading && styles["button--loading"], // State modifier
       className
     );
     ```

4. **Button.tsx - Estructura JSX:**

   - [ ] Renderiza elementos BEM correctamente:

     ```typescript
     return (
       <button className={buttonClasses} disabled={disabled || loading} {...props}>
         {icon && <span className={styles.button__icon}>{icon}</span>}
         {children && <span className={styles.button__text}>{children}</span>}
         {loading && <span className={styles.button__loader}>...</span>}
       </button>
     );
     ```

   - [ ] Named export: `export { Button };`

5. **Button.module.css - Estructura BEM:**

   - [ ] Block (.button):

     ```css
     .button {
       display: inline-flex;
       align-items: center;
       justify-content: center;
       gap: var(--space-sm);
       font-family: inherit;
       font-weight: var(--font-weight-medium);
       border: none;
       border-radius: var(--border-radius-md);
       cursor: pointer;
       transition: all var(--transition-base);
       white-space: nowrap;
     }
     ```

   - [ ] Elements:

     ```css
     .button__icon {
       display: flex;
       align-items: center;
     }

     .button__text {
       display: inline-block;
     }

     .button__loader {
       display: inline-block;
       animation: spin 1s linear infinite;
     }
     ```

   - [ ] Intent Modifiers (4 intents):

     ```css
     /* Primary */
     .button--primary {
       background-color: var(--color-primary);
       color: var(--color-white);
     }

     .button--primary:hover:not(:disabled) {
       background-color: var(--color-gray-700);
     }

     /* Secondary */
     .button--secondary {
       background-color: transparent;
       color: var(--color-primary);
       border: 1px solid var(--color-gray-300);
     }

     .button--secondary:hover:not(:disabled) {
       background-color: var(--color-gray-100);
     }

     /* Success */
     .button--success {
       background-color: var(--color-success);
       color: var(--color-white);
     }

     /* Error */
     .button--error {
       background-color: var(--color-error);
       color: var(--color-white);
     }
     ```

   - [ ] Size Modifiers (3 sizes):

     ```css
     .button--small {
       padding: var(--space-xs) var(--space-sm);
       font-size: var(--font-size-sm);
     }

     .button--medium {
       padding: var(--space-sm) var(--space-md);
       font-size: var(--font-size-base);
     }

     .button--large {
       padding: var(--space-md) var(--space-lg);
       font-size: var(--font-size-lg);
     }
     ```

   - [ ] State Modifiers:

     ```css
     .button--disabled {
       opacity: 0.5;
       cursor: not-allowed;
       pointer-events: none;
     }

     .button--loading {
       cursor: wait;
       position: relative;
     }
     ```

   - [ ] Animation para loading:
     ```css
     @keyframes spin {
       from {
         transform: rotate(0deg);
       }
       to {
         transform: rotate(360deg);
       }
     }
     ```

6. **index.ts:**
   - [ ] Barrel export:
     ```typescript
     export { Button } from "./Button";
     export { INTENT, SIZE } from "./Button.constants";
     export type { IntentType, SizeType } from "./Button.constants";
     ```

### 🧪 Cómo Probar:

```typescript
// 1. Crear página de prueba: src/App.tsx
import { Button } from "./components/Button";
import { INTENT, SIZE } from "./components/Button/Button.constants";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
      <h1>Button Component Tests</h1>

      {/* Test 1: Intents */}
      <section>
        <h2>Intents</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Button intent={INTENT.PRIMARY}>Primary</Button>
          <Button intent={INTENT.SECONDARY}>Secondary</Button>
          <Button intent={INTENT.SUCCESS}>Success</Button>
          <Button intent={INTENT.ERROR}>Error</Button>
        </div>
      </section>

      {/* Test 2: Sizes */}
      <section>
        <h2>Sizes</h2>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Button size={SIZE.SMALL}>Small</Button>
          <Button size={SIZE.MEDIUM}>Medium</Button>
          <Button size={SIZE.LARGE}>Large</Button>
        </div>
      </section>

      {/* Test 3: With Icon */}
      <section>
        <h2>With Icon</h2>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button icon={<span>🚀</span>}>With Icon</Button>
          <Button icon={<span>❤️</span>} intent={INTENT.ERROR}>
            Delete
          </Button>
        </div>
      </section>

      {/* Test 4: States */}
      <section>
        <h2>States</h2>
        <div style={{ display: "flex", gap: "1rem", flexDirection: "column", alignItems: "flex-start" }}>
          <Button onClick={handleClick} loading={loading}>
            {loading ? "Loading..." : "Click to Load"}
          </Button>

          <Button disabled={disabled}>Disabled Button</Button>

          <Button onClick={() => setDisabled(!disabled)}>Toggle Disabled</Button>
        </div>
      </section>

      {/* Test 5: Combinations */}
      <section>
        <h2>Combinations</h2>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button intent={INTENT.SUCCESS} size={SIZE.LARGE} icon={<span>✓</span>}>
            Success Large
          </Button>

          <Button intent={INTENT.SECONDARY} size={SIZE.SMALL}>
            Secondary Small
          </Button>
        </div>
      </section>

      {/* Test 6: HTML Button Props */}
      <section>
        <h2>HTML Props</h2>
        <Button type="submit" onClick={() => alert("Clicked!")} title="This is a tooltip">
          Submit Form
        </Button>
      </section>
    </div>
  );
}

export { App };
```

```bash
# 2. Verificaciones visuales en navegador:
npm run dev

# Checklist de verificación:
□ Todos los intents tienen colores correctos
□ Hover effects funcionan en todos los intents
□ Sizes son visualmente diferentes
□ Icons se renderizan correctamente
□ Loading state muestra animación
□ Disabled state previene clicks
□ Transiciones suaves entre estados
□ Responsive en mobile

# 3. Verificar en DevTools:
# - Inspeccionar elemento Button
# - Debe ver clases BEM aplicadas correctamente
# - Example: "Button_button__abc123 Button_button--primary__def456"

# 4. Accessibility checks:
# - Tab navigation funciona
# - Disabled buttons no son focusables
# - Aria attributes si son necesarios
```

### 📦 Estructura Esperada Post-Tarea:

```
src/components/Button/
├── Button.tsx              (80-100 líneas)
├── Button.module.css       (120-150 líneas)
├── Button.constants.ts     (15-20 líneas)
└── index.ts                (3 líneas)

Total: ~220 líneas de código
```

### 📊 Métricas de Éxito:

- 4 intents funcionando
- 3 sizes funcionando
- 2 states (disabled, loading) funcionando
- Icon support funciona
- 0 errores TypeScript
- CSS Modules clases aisladas
- Hover/focus states correctos

**Estimate:** 6-8 horas

**Conflict Risk:**

- 25% con Dev B (usará Button en Tic-Tac-Toe, puede pedir ajustes)
- 30% con Dev C (usará Button en Poke Collection, puede necesitar nuevos intents)
- **Mitigación:** Diseño flexible, fácil agregar nuevos intents

**Dependencies:**

- Requiere A1 (proyecto setup)
- Requiere A2 (CSS variables)
- Requiere A4 (cx utility)

**Blockers:** Ninguno

**💡 Notas:**

- Este componente será usado por todos los devs
- Diseñado para ser extensible
- Si otros devs necesitan nuevos intents, pueden agregarlo fácilmente

---

## Tarea A6: Input Component

**Title:** Input Component - Componente de Input con BEM

**Assignee:** Dev A

**Status:** Todo

**Priority:** P0

**Labels:** component, shared, bem, forms

### Description

Crear componente Input reutilizable con label, helper text, estados de error, disabled, y estructura BEM completa.

### 📁 Archivos a Crear:

```
└── src/components/Input/
    ├── Input.tsx                 # Componente principal
    ├── Input.module.css          # Estilos BEM
    └── index.ts                  # Barrel export
```

### ✅ Acceptance Criteria:

1. **Input.tsx - Interface:**

   - [ ] Interface IInput definida:

     ```typescript
     import { useId } from "react";

     interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
       label?: string;
       helperText?: string;
       error?: string;
       disabled?: boolean;
       required?: boolean;
       className?: string;
     }
     ```

2. **Input.tsx - Componente:**

   - [ ] Usa useId() para generar id único:

     ```typescript
     function Input({ label, helperText, error, disabled = false, required = false, className = "", id, ...props }: IInput) {
       const generatedId = useId();
       const inputId = id || generatedId;

       // Implementation
     }
     ```

   - [ ] Composición de clases BEM:

     ```typescript
     import { cx } from "../../utils/cx";
     import styles from "./Input.module.css";

     const containerClasses = cx(styles.input, error && styles["input--error"], disabled && styles["input--disabled"], className);
     ```

3. **Input.tsx - Estructura JSX:**

   - [ ] Estructura BEM completa:

     ```typescript
     return (
       <div className={containerClasses}>
         {label && (
           <label htmlFor={inputId} className={styles.input__label}>
             {label}
             {required && <span className={styles.input__required}>*</span>}
           </label>
         )}

         <input
           id={inputId}
           className={styles.input__field}
           disabled={disabled}
           aria-invalid={error ? "true" : "false"}
           aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
           {...props}
         />

         {helperText && !error && (
           <span id={`${inputId}-helper`} className={styles.input__helper}>
             {helperText}
           </span>
         )}

         {error && (
           <span id={`${inputId}-error`} className={styles.input__error} role="alert">
             {error}
           </span>
         )}
       </div>
     );
     ```

   - [ ] Named export: `export { Input };`

4. **Input.module.css - Estructura BEM:**

   - [ ] Block (.input):

     ```css
     .input {
       display: flex;
       flex-direction: column;
       gap: var(--space-xs);
       width: 100%;
     }
     ```

   - [ ] Elements:

     ```css
     .input__label {
       display: block;
       font-size: var(--font-size-sm);
       font-weight: var(--font-weight-medium);
       color: var(--color-primary);
       margin-bottom: var(--space-xs);
     }

     .input__required {
       color: var(--color-error);
       margin-left: var(--space-xs);
     }

     .input__field {
       width: 100%;
       padding: var(--space-sm) var(--space-md);
       font-size: var(--font-size-base);
       color: var(--color-primary);
       background-color: var(--color-white);
       border: 1px solid var(--color-gray-300);
       border-radius: var(--border-radius-md);
       transition: border-color var(--transition-base), box-shadow var(--transition-base);
     }

     .input__field:focus {
       outline: none;
       border-color: var(--color-primary);
       box-shadow: 0 0 0 3px rgba(24, 24, 27, 0.1);
     }

     .input__field::placeholder {
       color: var(--color-gray-400);
     }

     .input__helper {
       font-size: var(--font-size-xs);
       color: var(--color-secondary);
     }

     .input__error {
       font-size: var(--font-size-xs);
       color: var(--color-error);
       font-weight: var(--font-weight-medium);
     }
     ```

   - [ ] Modifiers:

     ```css
     /* Error State */
     .input--error .input__field {
       border-color: var(--color-error);
     }

     .input--error .input__field:focus {
       border-color: var(--color-error);
       box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
     }

     /* Disabled State */
     .input--disabled .input__label {
       opacity: 0.5;
     }

     .input--disabled .input__field {
       opacity: 0.5;
       cursor: not-allowed;
       background-color: var(--color-gray-100);
     }
     ```

5. **index.ts:**
   - [ ] Barrel export:
     ```typescript
     export { Input } from "./Input";
     ```

### 🧪 Cómo Probar:

```typescript
// 1. Crear página de prueba: src/App.tsx
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (password && password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Input Component Tests</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Test 1: Basic Input */}
        <Input label="Username" placeholder="Enter your username" value={username} onChange={e => setUsername(e.target.value)} required />

        {/* Test 2: With Helper Text */}
        <Input
          label="Email"
          type="email"
          placeholder="user@example.com"
          helperText="We'll never share your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          error={errors.email}
          required
        />

        {/* Test 3: With Error */}
        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          helperText="At least 6 characters"
          value={password}
          onChange={e => setPassword(e.target.value)}
          error={errors.password}
          required
        />

        {/* Test 4: Disabled */}
        <Input label="Disabled Input" value="This is disabled" disabled={disabled} helperText="This input is disabled" />

        {/* Test 5: Different Types */}
        <Input label="Number Input" type="number" placeholder="Enter a number" min={0} max={100} />

        <Input label="Date Input" type="date" />

        <Input label="Search Input" type="search" placeholder="Search..." />

        {/* Controls */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button type="submit">Submit Form</Button>
          <Button
            type="button"
            intent="secondary"
            onClick={() => {
              setUsername("");
              setEmail("");
              setPassword("");
              setErrors({});
            }}
          >
            Clear
          </Button>
          <Button type="button" onClick={() => setDisabled(!disabled)}>
            Toggle Disabled
          </Button>
        </div>
      </form>

      {/* State Display */}
      <div style={{ marginTop: "2rem", padding: "1rem", backgroundColor: "#f4f4f5", borderRadius: "0.5rem" }}>
        <h3>Form State:</h3>
        <pre>{JSON.stringify({ username, email, password, errors }, null, 2)}</pre>
      </div>
    </div>
  );
}

export { App };
```

```bash
# 2. Verificaciones en navegador:
npm run dev

# Checklist:
□ Label renderiza correctamente
□ Required asterisk (*) aparece
□ Placeholder visible
□ Helper text muestra debajo del input
□ Error state cambia border a rojo
□ Error message muestra con estilo correcto
□ Focus state muestra box-shadow
□ Disabled state opaca el input
□ Tipos diferentes (email, password, number, date) funcionan
□ Form submission valida correctamente

# 3. Accessibility checks:
# DevTools > Lighthouse > Accessibility
□ Label asociado correctamente con input (htmlFor + id)
□ Error messages tienen role="alert"
□ aria-invalid en error state
□ aria-describedby conecta helper/error text
□ Tab navigation funciona
□ Screen reader friendly

# 4. Verificar en DevTools:
# - Inspeccionar elemento
# - Ver clases BEM aplicadas
# - Check aria attributes
```

### 📦 Estructura Esperada Post-Tarea:

```
src/components/Input/
├── Input.tsx               (90-110 líneas)
├── Input.module.css        (100-120 líneas)
└── index.ts                (1 línea)

Total: ~210 líneas de código
```

### 📊 Métricas de Éxito:

- Label, helper, error funcionan
- Estados (normal, focus, error, disabled) correctos
- Accessibility score 100%
- Tipos HTML5 soportados
- 0 errores TypeScript
- useId() genera ids únicos

**Estimate:** 6-8 horas

**Conflict Risk:**

- 10% con Dev B (Tic-Tac-Toe no usa mucho Input)
- 35% con Dev C (Poke Collection usa Input extensivamente)
- **Mitigación:** Diseño flexible para customización

**Dependencies:**

- Requiere A1 (proyecto setup)
- Requiere A2 (CSS variables)
- Requiere A4 (cx utility)

**Blockers:** Ninguno

**💡 Notas:**

- useId() requiere React 18+
- Aria attributes para accessibility
- Error state sobrescribe helper text

---

## Tarea A7: LanguagePicker Component

**Title:** LanguagePicker Component - Selector de Idioma EN/ES

**Assignee:** Dev A

**Status:** Todo

**Priority:** P1

**Labels:** component, i18n

### Description

Crear componente de selector de idioma que se muestra en el header de la aplicación, permitiendo alternar entre inglés y español con iconos de banderas.

### 📁 Archivos a Crear:

```
└── src/components/LanguagePicker/
    ├── LanguagePicker.tsx            # Componente principal
    ├── LanguagePicker.module.css     # Estilos BEM
    └── index.ts                      # Barrel export
```

### ✅ Acceptance Criteria:

1. **LanguagePicker.tsx - Componente:**

   - [ ] Componente funcional creado
   - [ ] Usa hook useI18n() del contexto:

     ```typescript
     import { useI18n } from "../../contexts";
     import styles from "./LanguagePicker.module.css";

     function LanguagePicker() {
       const { language, setLanguage } = useI18n();

       // Implementation
     }
     ```

   - [ ] Importa iconos de banderas desde assets:

     ```typescript
     import enFlag from "../../assets/en-flag.svg";
     import esFlag from "../../assets/es-flag.svg";
     ```

   - [ ] Renderiza botones para cada idioma:

     ```typescript
     return (
       <div className={styles.languagepicker}>
         <button
           className={cx(styles.languagepicker__button, language === "en" && styles["languagepicker__button--active"])}
           onClick={() => setLanguage("en")}
           aria-label="Switch to English"
           title="English"
         >
           <img src={enFlag} alt="EN" className={styles.languagepicker__flag} />
           <span className={styles.languagepicker__text}>EN</span>
         </button>

         <button
           className={cx(styles.languagepicker__button, language === "es" && styles["languagepicker__button--active"])}
           onClick={() => setLanguage("es")}
           aria-label="Cambiar a Español"
           title="Español"
         >
           <img src={esFlag} alt="ES" className={styles.languagepicker__flag} />
           <span className={styles.languagepicker__text}>ES</span>
         </button>
       </div>
     );
     ```

   - [ ] Named export: `export { LanguagePicker };`

2. **LanguagePicker.module.css - Estilos BEM:**

   - [ ] Block (.languagepicker):

     ```css
     .languagepicker {
       display: flex;
       gap: var(--space-sm);
       align-items: center;
     }
     ```

   - [ ] Elements:

     ```css
     .languagepicker__button {
       display: flex;
       align-items: center;
       gap: var(--space-xs);
       padding: var(--space-xs) var(--space-sm);
       background-color: transparent;
       border: 1px solid var(--color-gray-300);
       border-radius: var(--border-radius-md);
       cursor: pointer;
       transition: all var(--transition-base);
       color: var(--color-secondary);
     }

     .languagepicker__button:hover {
       background-color: var(--color-gray-100);
       border-color: var(--color-gray-400);
     }

     .languagepicker__flag {
       width: 20px;
       height: 15px;
       object-fit: cover;
     }

     .languagepicker__text {
       font-size: var(--font-size-sm);
       font-weight: var(--font-weight-medium);
     }
     ```

   - [ ] Modifier (active state):

     ```css
     .languagepicker__button--active {
       background-color: var(--color-primary);
       border-color: var(--color-primary);
       color: var(--color-white);
     }

     .languagepicker__button--active:hover {
       background-color: var(--color-gray-700);
       border-color: var(--color-gray-700);
     }
     ```

3. **index.ts:**
   - [ ] Barrel export:
     ```typescript
     export { LanguagePicker } from "./LanguagePicker";
     ```

### 🧪 Cómo Probar:

```typescript
// 1. Crear prueba en src/App.tsx
import { LanguagePicker } from "./components/LanguagePicker";
import { useI18n } from "./contexts";

function App() {
  const { t } = useI18n();

  return (
    <div style={{ padding: "2rem" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
          padding: "1rem",
          backgroundColor: "#fff",
          borderRadius: "0.5rem",
        }}
      >
        <h1>{t("home-title")}</h1>
        <LanguagePicker />
      </header>

      <main>
        <h2>{t("home-subtitle")}</h2>
        <p>{t("home-description")}</p>
      </main>
    </div>
  );
}

export { App };
```

```bash
# 2. Verificar en navegador:
npm run dev

# Checklist:
□ Ambos botones (EN/ES) se muestran con banderas
□ Botón activo tiene estilo diferente (fondo oscuro)
□ Click en EN cambia idioma a inglés
□ Click en ES cambia idioma a español
□ Textos de la página cambian al cambiar idioma
□ Hover effects funcionan
□ Estado persiste al refrescar página
□ Aria labels correctos para accessibility

# 3. DevTools checks:
# - localStorage debe tener 'app-language'
# - Clases BEM aplicadas correctamente
```

### 📦 Estructura Esperada Post-Tarea:

```
src/components/LanguagePicker/
├── LanguagePicker.tsx          (40-50 líneas)
├── LanguagePicker.module.css   (50-60 líneas)
└── index.ts                    (1 línea)

Total: ~100 líneas de código
```

### 📊 Métricas de Éxito:

- Ambos idiomas funcionan
- Estado activo visible
- Iconos de banderas se muestran
- Integración con I18nContext funciona
- Persistence en localStorage
- 0 errores TypeScript

**Estimate:** 3-4 horas

**Conflict Risk:** 0% (componente aislado, usado solo por Dev A en App)

**Dependencies:**

- Requiere A1 (proyecto setup)
- Requiere A2 (CSS variables)
- Requiere A3 (i18n system) ⚠️ CRÍTICO
- Requiere A4 (cx utility)

**Blockers:** Ninguno

**💡 Notas:**

- Assets de banderas ya existen en src/assets/
- Componente se usará en header de App.tsx

---

## Tarea A8: Routing & App Shell

**Title:** Routing & App Shell - React Router y Estructura de App

**Assignee:** Dev A

**Status:** Todo

**Priority:** P0

**Labels:** foundation, routing

### Description

Configurar React Router DOM con rutas para las 3 páginas principales (Home, Tic-Tac-Toe, Poke Collection) y crear la estructura shell de la aplicación con header y LanguagePicker.

### 📁 Archivos a Crear:

```
Ninguno (solo modificación)
```

### 📝 Archivos a Modificar:

```
├── src/App.tsx                   # Configurar routing
└── src/main.tsx                  # Verificar providers
```

### ✅ Acceptance Criteria:

1. **src/App.tsx - Routing Configuration:**

   - [ ] Importa React Router:

     ```typescript
     import { BrowserRouter, Routes, Route } from "react-router-dom";
     ```

   - [ ] Importa componentes necesarios:

     ```typescript
     import { LanguagePicker } from "./components/LanguagePicker";
     // HomePage será importado cuando esté listo
     ```

   - [ ] Estructura del App component:

     ```typescript
     function App() {
       return (
         <BrowserRouter>
           <div className="app">
             <header className="app-header">
               <div className="app-header__container">
                 <h1 className="app-header__title">React Showcase</h1>
                 <LanguagePicker />
               </div>
             </header>

             <main className="app-main">
               <Routes>
                 <Route path="/" element={<div>Home Page (Dev A - A11)</div>} />
                 <Route path="/tic-tac-toe" element={<div>Tic-Tac-Toe (Dev B - B5)</div>} />
                 <Route path="/poke-collection" element={<div>Poke Collection (Dev C - C10)</div>} />
                 <Route path="*" element={<div>404 - Page Not Found</div>} />
               </Routes>
             </main>
           </div>
         </BrowserRouter>
       );
     }

     export { App };
     ```

   - [ ] Estilos inline temporales o crear App.css:

     ```css
     .app {
       min-height: 100vh;
       display: flex;
       flex-direction: column;
     }

     .app-header {
       background-color: var(--color-white);
       border-bottom: 1px solid var(--color-gray-200);
       padding: var(--space-md) 0;
     }

     .app-header__container {
       max-width: 1200px;
       margin: 0 auto;
       padding: 0 var(--space-lg);
       display: flex;
       justify-content: space-between;
       align-items: center;
     }

     .app-header__title {
       font-size: var(--font-size-2xl);
       font-weight: var(--font-weight-bold);
       color: var(--color-primary);
       margin: 0;
     }

     .app-main {
       flex: 1;
       max-width: 1200px;
       width: 100%;
       margin: 0 auto;
       padding: var(--space-xl) var(--space-lg);
     }
     ```

2. **src/main.tsx - Verificar Stack de Providers:**

   - [ ] Orden correcto de providers:

     ```typescript
     import React from "react";
     import ReactDOM from "react-dom/client";
     import { App } from "./App";
     import { I18nProvider } from "./contexts";
     import "./styles/global.css";

     ReactDOM.createRoot(document.getElementById("root")!).render(
       <React.StrictMode>
         <I18nProvider>
           <App />
         </I18nProvider>
       </React.StrictMode>
     );
     ```

3. **Rutas Configuradas:**

   - [ ] Ruta `/` para HomePage (placeholder por ahora)
   - [ ] Ruta `/tic-tac-toe` para TicTacToePage (placeholder)
   - [ ] Ruta `/poke-collection` para PokeCollectionPage (placeholder)
   - [ ] Ruta `*` para 404 Not Found

4. **Navegación Funcional:**
   - [ ] BrowserRouter como wrapper principal
   - [ ] Routes y Route configurados correctamente
   - [ ] Placeholders visibles para cada ruta

### 🧪 Cómo Probar:

```bash
# 1. Iniciar servidor
npm run dev
```

```typescript
// 2. Agregar navegación temporal para testing en App.tsx
import { Link } from "react-router-dom";

// Dentro del header, agregar:
<nav style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
  <Link to="/">Home</Link>
  <Link to="/tic-tac-toe">Tic-Tac-Toe</Link>
  <Link to="/poke-collection">Poke Collection</Link>
  <Link to="/not-exist">404 Test</Link>
</nav>;
```

```bash
# 3. Verificar en navegador:
□ http://localhost:5173/ muestra "Home Page (Dev A - A11)"
□ http://localhost:5173/tic-tac-toe muestra "Tic-Tac-Toe (Dev B - B5)"
□ http://localhost:5173/poke-collection muestra "Poke Collection (Dev C - C10)"
□ http://localhost:5173/not-exist muestra "404 - Page Not Found"
□ Links de navegación funcionan
□ LanguagePicker visible en header
□ URL cambia al navegar
□ Browser back/forward buttons funcionan
□ Refresh page mantiene ruta actual

# 4. DevTools checks:
# - Inspeccionar React DevTools
# - Ver que BrowserRouter está activo
# - Ver que Routes están configurados
```

### 📦 Estructura Esperada Post-Tarea:

```
src/
├── App.tsx                  (50-70 líneas modificadas)
└── main.tsx                 (sin cambios o mínimos)
```

### 📊 Métricas de Éxito:

- 3 rutas principales funcionan
- 404 route funciona
- Navegación entre páginas fluida
- LanguagePicker visible en todas las páginas
- URL refleja ruta actual
- 0 errores TypeScript
- 0 errores de routing

**Estimate:** 3-4 horas

**Conflict Risk:**

- 15% con Dev B (agregará import de TicTacToePage cuando esté lista)
- 15% con Dev C (agregará import de PokeCollectionPage cuando esté lista)
- **Mitigación:** Placeholders claros en rutas, imports comentados listos para descomentar

**Dependencies:**

- Requiere A1 (proyecto setup con react-router-dom instalado)
- Requiere A2 (CSS variables para estilos)
- Requiere A3 (I18nProvider debe envolver BrowserRouter)
- Requiere A7 (LanguagePicker para mostrar en header)

**Blockers:** Ninguno

**💡 Notas:**

- Dev B y Dev C solo necesitarán importar sus páginas y reemplazar placeholders
- Header será persistente en todas las páginas
- Estructura lista para expandir (agregar footer, sidebar, etc.)

---

## Tarea A9: ProjectCard Component

**Title:** ProjectCard Component - Tarjeta de Proyecto

**Assignee:** Dev A

**Status:** Todo

**Priority:** P1

**Labels:** component

### Description

Crear componente ProjectCard para mostrar preview de mini-proyectos en la HomePage, incluyendo imagen, título, descripción, tags de tecnologías y link.

### 📁 Archivos a Crear:

```
└── src/components/ProjectCard/
    ├── ProjectCard.tsx               # Componente principal
    ├── ProjectCard.module.css        # Estilos BEM
    └── index.ts                      # Barrel export
```

### ✅ Acceptance Criteria:

1. **ProjectCard.tsx - Interface:**

   - [ ] Interface IProjectCard definida:

     ```typescript
     import { Link } from "react-router-dom";
     import styles from "./ProjectCard.module.css";

     interface IProjectCard {
       title: string;
       description: string;
       image: string;
       imageAlt?: string;
       tags: string[];
       link: string;
       className?: string;
     }
     ```

2. **ProjectCard.tsx - Componente:**

   - [ ] Componente funcional:

     ```typescript
     function ProjectCard({ title, description, image, imageAlt, tags, link, className = "" }: IProjectCard) {
       return (
         <Link to={link} className={cx(styles.projectcard, className)}>
           <div className={styles.projectcard__image - wrapper}>
             <img src={image} alt={imageAlt || title} className={styles.projectcard__image} />
           </div>

           <div className={styles.projectcard__content}>
             <h3 className={styles.projectcard__title}>{title}</h3>
             <p className={styles.projectcard__description}>{description}</p>

             <div className={styles.projectcard__tags}>
               {tags.map(tag => (
                 <span key={tag} className={styles.projectcard__tag}>
                   {tag}
                 </span>
               ))}
             </div>
           </div>
         </Link>
       );
     }

     export { ProjectCard };
     ```

3. **ProjectCard.module.css - Estilos BEM:**

   - [ ] Block y estructura:

     ```css
     .projectcard {
       display: flex;
       flex-direction: column;
       background-color: var(--color-white);
       border-radius: var(--border-radius-lg);
       overflow: hidden;
       box-shadow: var(--shadow-sm);
       transition: all var(--transition-base);
       text-decoration: none;
       color: inherit;
     }

     .projectcard:hover {
       box-shadow: var(--shadow-lg);
       transform: translateY(-4px);
     }
     ```

   - [ ] Elements:

     ```css
     .projectcard__image-wrapper {
       position: relative;
       width: 100%;
       padding-top: 56.25%; /* 16:9 aspect ratio */
       background-color: var(--color-gray-100);
       overflow: hidden;
     }

     .projectcard__image {
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       object-fit: cover;
       transition: transform var(--transition-slow);
     }

     .projectcard:hover .projectcard__image {
       transform: scale(1.05);
     }

     .projectcard__content {
       padding: var(--space-lg);
       display: flex;
       flex-direction: column;
       gap: var(--space-sm);
       flex: 1;
     }

     .projectcard__title {
       font-size: var(--font-size-xl);
       font-weight: var(--font-weight-bold);
       color: var(--color-primary);
       margin: 0;
     }

     .projectcard__description {
       font-size: var(--font-size-base);
       color: var(--color-secondary);
       line-height: var(--line-height-relaxed);
       margin: 0;
       flex: 1;
     }

     .projectcard__tags {
       display: flex;
       flex-wrap: wrap;
       gap: var(--space-xs);
       margin-top: var(--space-sm);
     }

     .projectcard__tag {
       display: inline-block;
       padding: var(--space-xs) var(--space-sm);
       font-size: var(--font-size-xs);
       font-weight: var(--font-weight-medium);
       color: var(--color-primary);
       background-color: var(--color-gray-100);
       border-radius: var(--border-radius-full);
     }
     ```

   - [ ] Responsive:

     ```css
     @media (max-width: 768px) {
       .projectcard__content {
         padding: var(--space-md);
       }

       .projectcard__title {
         font-size: var(--font-size-lg);
       }
     }
     ```

4. **index.ts:**
   - [ ] Barrel export:
     ```typescript
     export { ProjectCard } from "./ProjectCard";
     ```

### 🧪 Cómo Probar:

```typescript
// 1. Crear prueba en src/App.tsx
import { ProjectCard } from "./components/ProjectCard";
import tictactoePreview from "./assets/tictactoe-preview.svg";
import pokePreview from "./assets/poke-preview.svg";

function App() {
  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>ProjectCard Component Test</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        <ProjectCard
          title="Tic-Tac-Toe"
          description="Classic game with move history, winner detection, and localStorage persistence. Built following React official tutorial."
          image={tictactoePreview}
          imageAlt="Tic-Tac-Toe game preview"
          tags={["React", "TypeScript", "Game Logic", "LocalStorage"]}
          link="/tic-tac-toe"
        />

        <ProjectCard
          title="Poke Collection"
          description="Pokemon collection manager with search functionality, favorites system, and API integration with PokeAPI."
          image={pokePreview}
          imageAlt="Pokemon collection preview"
          tags={["React", "API", "Forms", "CRUD"]}
          link="/poke-collection"
        />
      </div>
    </div>
  );
}

export { App };
```

```bash
# 2. Verificar en navegador:
npm run dev

# Checklist:
□ Cards se muestran en grid responsive
□ Imágenes cargan correctamente con aspect ratio 16:9
□ Título, descripción visible
□ Tags se muestran como pills
□ Hover effect: card sube, imagen zoom, sombra aumenta
□ Click en card navega a ruta correcta
□ Responsive en mobile (1 columna)
□ Responsive en tablet (2 columnas)
□ Responsive en desktop (2 columnas o más)

# 3. Test de accesibilidad:
□ Link tiene sentido para screen readers
□ Imágenes tienen alt text
□ Keyboard navigation funciona (tab + enter)
□ Focus visible en card
```

### 📦 Estructura Esperada Post-Tarea:

```
src/components/ProjectCard/
├── ProjectCard.tsx             (50-60 líneas)
├── ProjectCard.module.css      (100-120 líneas)
└── index.ts                    (1 línea)

Total: ~170 líneas de código
```

### 📊 Métricas de Éxito:

- Card muestra todos los elementos correctamente
- Hover effects suaves y atractivos
- Responsive en todos los breakpoints
- Navegación funciona
- 0 errores TypeScript
- Accessibility score alto

**Estimate:** 4-5 horas

**Conflict Risk:** 0% (usado solo en HomePage por Dev A)

**Dependencies:**

- Requiere A1 (proyecto setup)
- Requiere A2 (CSS variables)
- Requiere A4 (cx utility)
- Requiere A8 (routing para Link component)

**Blockers:** Ninguno

**💡 Notas:**

- Preview images ya existen en src/assets/
- Componente diseñado para ser reutilizable
- Aspect ratio 16:9 para imágenes consistentes

---

## Tarea A10: Tag Component

**Title:** Tag Component - Badge de Tecnología

**Assignee:** Dev A

**Status:** Todo

**Priority:** P1

**Labels:** component

### Description

Crear componente Tag simple para mostrar badges de tecnologías en ProjectCards o en cualquier parte de la app.

### 📁 Archivos a Crear:

```
└── src/components/Tag/
    ├── Tag.tsx                       # Componente principal
    ├── Tag.module.css                # Estilos BEM
    └── index.ts                      # Barrel export
```

### ✅ Acceptance Criteria:

1. **Tag.tsx - Interface:**

   - [ ] Interface ITag definida:

     ```typescript
     import styles from "./Tag.module.css";
     import { cx } from "../../utils/cx";

     interface ITag {
       children: React.ReactNode;
       intent?: "default" | "primary" | "success" | "error";
       className?: string;
     }
     ```

2. **Tag.tsx - Componente:**

   - [ ] Componente funcional simple:

     ```typescript
     function Tag({ children, intent = "default", className = "" }: ITag) {
       const tagClasses = cx(styles.tag, styles[`tag--${intent}`], className);

       return <span className={tagClasses}>{children}</span>;
     }

     export { Tag };
     ```

3. **Tag.module.css - Estilos BEM:**

   - [ ] Block base:

     ```css
     .tag {
       display: inline-block;
       padding: var(--space-xs) var(--space-sm);
       font-size: var(--font-size-xs);
       font-weight: var(--font-weight-medium);
       border-radius: var(--border-radius-full);
       white-space: nowrap;
       transition: all var(--transition-fast);
     }
     ```

   - [ ] Intent Modifiers:

     ```css
     .tag--default {
       color: var(--color-primary);
       background-color: var(--color-gray-100);
     }

     .tag--primary {
       color: var(--color-white);
       background-color: var(--color-primary);
     }

     .tag--success {
       color: var(--color-white);
       background-color: var(--color-success);
     }

     .tag--error {
       color: var(--color-white);
       background-color: var(--color-error);
     }
     ```

4. **index.ts:**
   - [ ] Barrel export:
     ```typescript
     export { Tag } from "./Tag";
     ```

### 🧪 Cómo Probar:

```typescript
// 1. Crear prueba en src/App.tsx
import { Tag } from "./components/Tag";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Tag Component Test</h1>

      <section style={{ marginTop: "2rem" }}>
        <h2>Default Intent</h2>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <Tag>React</Tag>
          <Tag>TypeScript</Tag>
          <Tag>CSS Modules</Tag>
          <Tag>Vite</Tag>
        </div>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>All Intents</h2>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <Tag intent="default">Default</Tag>
          <Tag intent="primary">Primary</Tag>
          <Tag intent="success">Success</Tag>
          <Tag intent="error">Error</Tag>
        </div>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Use Case: Tech Stack</h2>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <Tag>React 18</Tag>
          <Tag>TypeScript</Tag>
          <Tag>React Router</Tag>
          <Tag>CSS Modules</Tag>
          <Tag>BEM</Tag>
          <Tag>ITCSS</Tag>
        </div>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Use Case: Status</h2>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <span>Project Status:</span>
          <Tag intent="success">Active</Tag>
          <Tag intent="primary">In Development</Tag>
          <Tag intent="error">Deprecated</Tag>
        </div>
      </section>
    </div>
  );
}

export { App };
```

```bash
# 2. Verificar en navegador:
npm run dev

# Checklist:
□ Tags se renderizan como pills redondeadas
□ Tamaño de texto pequeño y legible
□ Padding apropiado
□ 4 intents tienen colores correctos
□ No overflow de texto largo
□ Wrap en mobile cuando hay muchos tags
□ Legibilidad en todos los intents

# 3. Tests adicionales:
# - Agregar Tag con texto muy largo
# - Verificar que mantiene forma
# - Verificar en diferentes fondos
```

### 📦 Estructura Esperada Post-Tarea:

```
src/components/Tag/
├── Tag.tsx                 (15-20 líneas)
├── Tag.module.css          (40-50 líneas)
└── index.ts                (1 línea)

Total: ~65 líneas de código
```

### 📊 Métricas de Éxito:

- 4 intents funcionan
- Estilos consistentes con design system
- Componente pequeño y eficiente
- Reutilizable en cualquier contexto
- 0 errores TypeScript

**Estimate:** 2-3 horas

**Conflict Risk:** 0% (componente simple y aislado)

**Dependencies:**

- Requiere A1 (proyecto setup)
- Requiere A2 (CSS variables)
- Requiere A4 (cx utility)

**Blockers:** Ninguno

**💡 Notas:**

- Componente súper simple pero útil
- Puede extenderse con más intents si es necesario
- Se usa en ProjectCard

---

## Tarea A11: HomePage Implementation

**Title:** HomePage - Página Principal del Portfolio

**Assignee:** Dev A

**Status:** Todo

**Priority:** P1

**Labels:** page

### Description

Construir la página principal HomePage que muestra un hero section y un grid de ProjectCards para los mini-proyectos.

### 📁 Archivos a Crear:

```
└── src/pages/HomePage/
    ├── HomePage.tsx                  # Componente de página
    ├── HomePage.module.css           # Estilos de página
    └── index.ts                      # Barrel export
```

### 📝 Archivos a Modificar:

```
└── src/App.tsx                       # Importar HomePage y reemplazar placeholder
```

### ✅ Acceptance Criteria:

1. **HomePage.tsx - Componente:**

   - [ ] Componente funcional con estructura completa:

     ```typescript
     import { useI18n } from "../../contexts";
     import { ProjectCard } from "../../components/ProjectCard";
     import { Tag } from "../../components/Tag";
     import tictactoePreview from "../../assets/tictactoe-preview.svg";
     import pokePreview from "../../assets/poke-preview.svg";
     import styles from "./HomePage.module.css";

     function HomePage() {
       const { t } = useI18n();

       const projects = [
         {
           id: "tic-tac-toe",
           title: t("project-tictactoe-title"),
           description: t("project-tictactoe-description"),
           image: tictactoePreview,
           tags: ["React", "TypeScript", "Game Logic", "LocalStorage"],
           link: "/tic-tac-toe",
         },
         {
           id: "poke-collection",
           title: t("project-poke-title"),
           description: t("project-poke-description"),
           image: pokePreview,
           tags: ["React", "TypeScript", "API", "Forms", "CRUD"],
           link: "/poke-collection",
         },
       ];

       return (
         <div className={styles.homepage}>
           {/* Hero Section */}
           <section className={styles.homepage__hero}>
             <h1 className={styles.homepage__title}>{t("home-title")}</h1>
             <p className={styles.homepage__subtitle}>{t("home-subtitle")}</p>
             <p className={styles.homepage__description}>{t("home-description")}</p>

             <div className={styles.homepage__tech}>
               <Tag intent="primary">React 18</Tag>
               <Tag intent="primary">TypeScript</Tag>
               <Tag intent="primary">Vite</Tag>
               <Tag intent="primary">CSS Modules</Tag>
             </div>
           </section>

           {/* Projects Grid */}
           <section className={styles.homepage__projects}>
             <h2 className={styles.homepage__projects - title}>{t("home-projects-title")}</h2>

             <div className={styles.homepage__projects - grid}>
               {projects.map(project => (
                 <ProjectCard
                   key={project.id}
                   title={project.title}
                   description={project.description}
                   image={project.image}
                   tags={project.tags}
                   link={project.link}
                 />
               ))}
             </div>
           </section>
         </div>
       );
     }

     export { HomePage };
     ```

2. **HomePage.module.css - Estilos:**

   - [ ] Layout de página:

     ```css
     .homepage {
       display: flex;
       flex-direction: column;
       gap: var(--space-3xl);
       padding: var(--space-xl) 0;
     }
     ```

   - [ ] Hero section:

     ```css
     .homepage__hero {
       text-align: center;
       padding: var(--space-3xl) 0;
       display: flex;
       flex-direction: column;
       gap: var(--space-lg);
       align-items: center;
     }

     .homepage__title {
       font-size: var(--font-size-4xl);
       font-weight: var(--font-weight-bold);
       color: var(--color-primary);
       margin: 0;
       line-height: var(--line-height-tight);
     }

     .homepage__subtitle {
       font-size: var(--font-size-2xl);
       color: var(--color-secondary);
       margin: 0;
       max-width: 600px;
     }

     .homepage__description {
       font-size: var(--font-size-lg);
       color: var(--color-secondary);
       margin: 0;
       max-width: 700px;
       line-height: var(--line-height-relaxed);
     }

     .homepage__tech {
       display: flex;
       gap: var(--space-sm);
       flex-wrap: wrap;
       justify-content: center;
       margin-top: var(--space-md);
     }
     ```

   - [ ] Projects section:

     ```css
     .homepage__projects {
       display: flex;
       flex-direction: column;
       gap: var(--space-xl);
     }

     .homepage__projects-title {
       font-size: var(--font-size-3xl);
       font-weight: var(--font-weight-bold);
       color: var(--color-primary);
       margin: 0;
       text-align: center;
     }

     .homepage__projects-grid {
       display: grid;
       grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
       gap: var(--space-xl);
     }
     ```

   - [ ] Responsive:

     ```css
     @media (max-width: 768px) {
       .homepage__hero {
         padding: var(--space-xl) 0;
       }

       .homepage__title {
         font-size: var(--font-size-3xl);
       }

       .homepage__subtitle {
         font-size: var(--font-size-xl);
       }

       .homepage__description {
         font-size: var(--font-size-base);
       }

       .homepage__projects-grid {
         grid-template-columns: 1fr;
         gap: var(--space-lg);
       }
     }
     ```

3. **index.ts:**

   - [ ] Barrel export:
     ```typescript
     export { HomePage } from "./HomePage";
     ```

4. **Actualizar Translation Keys en locales:**

   - [ ] Agregar a `src/locales/en.json`:

     ```json
     {
       "home-title": "React Showcase Project",
       "home-subtitle": "My Mini Projects Portfolio",
       "home-description": "A collection of React projects demonstrating modern web development practices with TypeScript, React Router, and CSS Modules.",
       "home-projects-title": "Featured Projects",
       "project-tictactoe-title": "Tic-Tac-Toe Game",
       "project-tictactoe-description": "Classic game with move history, winner detection, and localStorage persistence. Built following React official tutorial with TypeScript.",
       "project-poke-title": "Poke Collection Manager",
       "project-poke-description": "Pokemon collection app with search, favorites system, and API integration with PokeAPI and Poke Collection Lite."
     }
     ```

   - [ ] Agregar traducciones a `src/locales/es.json`:
     ```json
     {
       "home-title": "Proyecto Showcase React",
       "home-subtitle": "Mi Portfolio de Mini Proyectos",
       "home-description": "Una colección de proyectos React que demuestran prácticas modernas de desarrollo web con TypeScript, React Router y CSS Modules.",
       "home-projects-title": "Proyectos Destacados",
       "project-tictactoe-title": "Juego Tic-Tac-Toe",
       "project-tictactoe-description": "Juego clásico con historial de movimientos, detección de ganador y persistencia en localStorage. Construido siguiendo el tutorial oficial de React con TypeScript.",
       "project-poke-title": "Gestor de Colección Poke",
       "project-poke-description": "Aplicación de colección de Pokemon con búsqueda, sistema de favoritos e integración con PokeAPI y Poke Collection Lite."
     }
     ```

5. **Actualizar src/App.tsx:**

   - [ ] Importar HomePage:

     ```typescript
     import { HomePage } from "./pages/HomePage";
     ```

   - [ ] Reemplazar placeholder en ruta:
     ```typescript
     <Route path="/" element={<HomePage />} />
     ```

### 🧪 Cómo Probar:

```bash
# 1. Iniciar servidor
npm run dev

# 2. Abrir http://localhost:5173/

# Checklist:
□ Hero section se muestra con título, subtítulo, descripción
□ Tags de tecnologías se muestran
□ 2 ProjectCards se muestran en grid
□ Grid es responsive (1 columna en mobile, 2 en desktop)
□ Textos cambian al cambiar idioma con LanguagePicker
□ Click en ProjectCard navega a ruta correcta
□ Hover effects en cards funcionan
□ Todo el diseño es responsive
□ Spacing consistente
□ Typography correcta

# 3. Test responsive:
# - Mobile (< 768px): 1 columna
# - Tablet (768-1024px): 2 columnas
# - Desktop (> 1024px): 2 columnas

# 4. Test i18n:
# - Cambiar a español
# - Todos los textos cambian
# - Refresh mantiene idioma

# 5. Test navigation:
# - Click en Tic-Tac-Toe card → navega a /tic-tac-toe
# - Back button → vuelve a home
# - Click en Poke Collection card → navega a /poke-collection
```

### 📦 Estructura Esperada Post-Tarea:

```
src/pages/HomePage/
├── HomePage.tsx            (80-100 líneas)
├── HomePage.module.css     (80-100 líneas)
└── index.ts                (1 línea)

src/locales/
├── en.json                 (agregadas ~8 keys)
└── es.json                 (agregadas ~8 keys)

src/
└── App.tsx                 (1 línea modificada)

Total: ~185 líneas nuevas
```

### 📊 Métricas de Éxito:

- HomePage renderiza correctamente
- Hero section atractivo y claro
- Projects grid responsive
- i18n funciona en todos los textos
- Navegación funciona
- 0 errores TypeScript
- 0 errores de routing
- Mobile-first responsive design

**Estimate:** 5-6 horas

**Conflict Risk:**

- 10% con Dev B (descripción de proyecto Tic-Tac-Toe puede refinarse)
- 10% con Dev C (descripción de proyecto Poke Collection puede refinarse)
- **Mitigación:** Keys de traducción claras y descriptivas

**Dependencies:**

- Requiere A1 (proyecto setup)
- Requiere A2 (CSS variables)
- Requiere A3 (i18n system) ⚠️ CRÍTICO
- Requiere A8 (routing) ⚠️ CRÍTICO
- Requiere A9 (ProjectCard) ⚠️ CRÍTICO
- Requiere A10 (Tag)

**Blockers:** Ninguno

**💡 Notas:**

- Esta es la última tarea de Dev A
- HomePage será el landing del proyecto
- Diseño simple pero profesional
- Fácil de extender con más proyectos

---

# 🟢 DEV B: Tic-Tac-Toe

## Tarea B1: Game Logic Utils

**Title:** Game Logic Utils - Funciones de Lógica del Juego

**Assignee:** Dev B

**Status:** Todo

**Priority:** P0

**Labels:** tic-tac-toe, logic, utils

### Description

Crear funciones utility puras para la lógica del juego Tic-Tac-Toe: cálculo de ganador, detección de empate, próximo jugador, y estado del juego.

### 📁 Archivos a Crear:

```
└── src/utils/
    └── tictactoe.ts                  # Game logic utilities
```

### ✅ Acceptance Criteria:

1. **Types y Constantes:**

   - [ ] Tipos TypeScript definidos:

     ```typescript
     export type Player = "X" | "O";
     export type SquareValue = Player | null;
     export type Board = SquareValue[];

     export interface WinnerResult {
       winner: Player | null;
       line: number[] | null;
     }
     ```

   - [ ] Líneas ganadoras definidas:
     ```typescript
     const WINNING_LINES: number[][] = [
       // Rows
       [0, 1, 2],
       [3, 4, 5],
       [6, 7, 8],
       // Columns
       [0, 3, 6],
       [1, 4, 7],
       [2, 5, 8],
       // Diagonals
       [0, 4, 8],
       [2, 4, 6],
     ];
     ```

2. **calculateWinner() Function:**

   - [ ] Función implementada con JSDoc:

     ```typescript
     /**
      * Calculate if there's a winner and return winner + winning line
      *
      * @param squares - Current board state (array of 9 squares)
      * @returns Object with winner ('X' | 'O' | null) and winning line indices
      */
     export function calculateWinner(squares: Board): WinnerResult {
       for (const [a, b, c] of WINNING_LINES) {
         if (squares[a] !== null && squares[a] === squares[b] && squares[a] === squares[c]) {
           return {
             winner: squares[a] as Player,
             line: [a, b, c],
           };
         }
       }

       return {
         winner: null,
         line: null,
       };
     }
     ```

3. **isTiedGame() Function:**

   - [ ] Función implementada:
     ```typescript
     /**
      * Check if the game is a tie (board is full and no winner)
      */
     export function isTiedGame(squares: Board): boolean {
       const isBoardFull = squares.every(square => square !== null);
       const { winner } = calculateWinner(squares);
       return isBoardFull && winner === null;
     }
     ```

4. **getNextPlayer() Function:**

   - [ ] Función implementada:
     ```typescript
     /**
      * Get the next player based on current board state
      * X always goes first
      */
     export function getNextPlayer(squares: Board): Player {
       const xCount = squares.filter(square => square === "X").length;
       const oCount = squares.filter(square => square === "O").length;
       return xCount <= oCount ? "X" : "O";
     }
     ```

5. **getGameStatus() Function:**

   - [ ] Función helper implementada:

     ```typescript
     /**
      * Get comprehensive game status
      */
     export function getGameStatus(squares: Board): {
       isGameOver: boolean;
       status: "playing" | "won" | "tied";
       winner: Player | null;
       nextPlayer: Player | null;
     } {
       const { winner } = calculateWinner(squares);
       const isTied = isTiedGame(squares);

       if (winner) {
         return { isGameOver: true, status: "won", winner, nextPlayer: null };
       }

       if (isTied) {
         return { isGameOver: true, status: "tied", winner: null, nextPlayer: null };
       }

       return {
         isGameOver: false,
         status: "playing",
         winner: null,
         nextPlayer: getNextPlayer(squares),
       };
     }
     ```

6. **createEmptyBoard() Function:**
   - [ ] Función helper:
     ```typescript
     /**
      * Create an empty 9-square board
      */
     export function createEmptyBoard(): Board {
       return Array(9).fill(null);
     }
     ```

### 🧪 Cómo Probar:

```typescript
// 1. Crear archivo de test manual: src/utils/tictactoe.test.ts
import { calculateWinner, isTiedGame, getNextPlayer, getGameStatus, createEmptyBoard } from "./tictactoe";

console.log("=== Tic-Tac-Toe Logic Tests ===");

// Test 1: Horizontal win
const board1 = ["X", "X", "X", "O", "O", null, null, null, null];
const result1 = calculateWinner(board1);
console.log("Test 1 - Horizontal Win:", result1);
// Expected: { winner: 'X', line: [0, 1, 2] }

// Test 2: Vertical win
const board2 = ["X", "O", null, "X", "O", null, "X", null, null];
const result2 = calculateWinner(board2);
console.log("Test 2 - Vertical Win:", result2);
// Expected: { winner: 'X', line: [0, 3, 6] }

// Test 3: Diagonal win
const board3 = ["X", "O", "O", null, "X", null, null, null, "X"];
const result3 = calculateWinner(board3);
console.log("Test 3 - Diagonal Win:", result3);
// Expected: { winner: 'X', line: [0, 4, 8] }

// Test 4: No winner yet
const board4 = ["X", "O", null, null, null, null, null, null, null];
const result4 = calculateWinner(board4);
console.log("Test 4 - No Winner:", result4);
// Expected: { winner: null, line: null }

// Test 5: Tied game
const board5 = ["X", "O", "X", "X", "O", "O", "O", "X", "X"];
const tied = isTiedGame(board5);
console.log("Test 5 - Tied Game:", tied);
// Expected: true

// Test 6: Next player
const board6 = ["X", null, null, null, null, null, null, null, null];
const next = getNextPlayer(board6);
console.log("Test 6 - Next Player:", next);
// Expected: 'O'

// Test 7: Game status - playing
const board7 = ["X", null, null, null, null, null, null, null, null];
const status7 = getGameStatus(board7);
console.log("Test 7 - Status Playing:", status7);
// Expected: { isGameOver: false, status: 'playing', winner: null, nextPlayer: 'O' }

// Test 8: Game status - won
const board8 = ["X", "X", "X", "O", "O", null, null, null, null];
const status8 = getGameStatus(board8);
console.log("Test 8 - Status Won:", status8);
// Expected: { isGameOver: true, status: 'won', winner: 'X', nextPlayer: null }

// Test 9: Empty board
const empty = createEmptyBoard();
console.log("Test 9 - Empty Board:", empty);
// Expected: [null, null, null, null, null, null, null, null, null]
```

```typescript
// 2. Probar en src/App.tsx temporalmente
import { calculateWinner, isTiedGame } from "./utils/tictactoe";

function App() {
  // Run tests
  const testBoard = ["X", "X", "X", "O", "O", null, null, null, null];
  const result = calculateWinner(testBoard);

  console.log("Winner:", result);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Tic-Tac-Toe Logic Test</h1>
      <p>Winner: {result.winner || "None"}</p>
      <p>Winning Line: {result.line ? result.line.join(", ") : "None"}</p>
      <p style={{ color: "gray" }}>Check console for all tests</p>
    </div>
  );
}

export { App };
```

```bash
# 3. Ejecutar y verificar en consola
npm run dev
# Abrir DevTools Console
# Verificar todos los tests pasan
```

### 📦 Estructura Esperada Post-Tarea:

```
src/utils/
├── cx.ts                   (ya existe - Dev A)
└── tictactoe.ts            (NEW - 150-180 líneas)
```

### 📊 Métricas de Éxito:

- Todas las funciones implementadas
- calculateWinner detecta 8 líneas ganadoras
- isTiedGame funciona correctamente
- getNextPlayer alterna correctamente
- 0 errores TypeScript
- Todas las funciones son puras (sin side effects)
- Tests manuales pasan

**Estimate:** 3-4 horas

**Conflict Risk:** 0% (archivo independiente propio de Dev B)

**Dependencies:**

- Requiere A1 (proyecto setup con TypeScript)

**Blockers:** Ninguno

**💡 Notas:**

- Funciones puras, fácil de testear
- Base sólida para el hook y componentes
- Sigue principios de programación funcional

---

## Tarea B2: useTicTacToe Hook

**Title:** useTicTacToe Hook - Custom Hook para Estado del Juego

**Assignee:** Dev B

**Status:** Todo

**Priority:** P0

**Labels:** tic-tac-toe, hook, state-management

### Description

Crear custom hook para manejar todo el estado del juego Tic-Tac-Toe incluyendo historial de movimientos, estado actual, funciones de jugada, jump-to-move y persistencia en localStorage.

### 📁 Archivos a Crear:

```
└── src/hooks/
    └── useTicTacToe.ts               # Custom hook del juego
```

### ✅ Acceptance Criteria:

1. **Interfaces y Tipos:**

   - [ ] Interface GameState definida:

     ```typescript
     interface GameState {
       history: Board[];
       currentMove: number;
     }
     ```

   - [ ] Constante para localStorage:
     ```typescript
     const STORAGE_KEY = "tictactoe-game-state";
     ```

2. **Funciones de localStorage:**

   - [ ] Función loadGameState():

     ```typescript
     function loadGameState(): GameState {
       try {
         const saved = localStorage.getItem(STORAGE_KEY);
         if (saved) {
           return JSON.parse(saved);
         }
       } catch (error) {
         // Ignore errors
       }
       return {
         history: [Array(9).fill(null)],
         currentMove: 0,
       };
     }
     ```

   - [ ] Función saveGameState():
     ```typescript
     function saveGameState(state: GameState): void {
       try {
         localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
       } catch (error) {
         // Ignore errors
       }
     }
     ```

3. **Hook useTicTacToe:**

   - [ ] State management con useState:

     ```typescript
     const [gameState, setGameState] = useState<GameState>(loadGameState);
     ```

   - [ ] Computed values:

     ```typescript
     const history = gameState.history;
     const currentMove = gameState.currentMove;
     const currentSquares = history[currentMove];
     const xIsNext = currentMove % 2 === 0;
     ```

   - [ ] useEffect para persistence:
     ```typescript
     useEffect(() => {
       saveGameState(gameState);
     }, [gameState]);
     ```

4. **Funciones del Hook:**

   - [ ] handlePlay(nextSquares):

     ```typescript
     function handlePlay(nextSquares: Board) {
       const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
       setGameState({
         history: nextHistory,
         currentMove: nextHistory.length - 1,
       });
     }
     ```

   - [ ] jumpTo(move):

     ```typescript
     function jumpTo(move: number) {
       setGameState({
         ...gameState,
         currentMove: move,
       });
     }
     ```

   - [ ] resetGame():
     ```typescript
     function resetGame() {
       setGameState({
         history: [Array(9).fill(null)],
         currentMove: 0,
       });
     }
     ```

5. **Winner y Draw Logic:**

   - [ ] Calcular winner usando utils:
     ```typescript
     const winnerInfo = calculateWinner(currentSquares);
     const winner = winnerInfo?.winner || null;
     const winningLine = winnerInfo?.line || [];
     const isDraw = !winner && isBoardFull(currentSquares);
     ```

6. **Return Object:**
   - [ ] Retorna todas las propiedades y funciones necesarias:
     ```typescript
     return {
       currentSquares,
       xIsNext,
       winner,
       winningLine,
       isDraw,
       history,
       currentMove,
       handlePlay,
       jumpTo,
       resetGame,
     };
     ```

### 🧪 Cómo Probar:

```typescript
// 1. Crear componente de prueba en src/App.tsx
import { useTicTacToe } from "./hooks/useTicTacToe";

function App() {
  const { currentSquares, xIsNext, winner, isDraw, handlePlay, resetGame, history, currentMove } = useTicTacToe();

  function handleClick(i: number) {
    if (currentSquares[i] || winner || isDraw) return;

    const nextSquares = currentSquares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    handlePlay(nextSquares);
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>useTicTacToe Hook Test</h1>

      <div style={{ marginBottom: "1rem" }}>
        <p>
          <strong>Status:</strong> {winner ? `Winner: ${winner}` : isDraw ? "Draw!" : `Next: ${xIsNext ? "X" : "O"}`}
        </p>
        <p>
          <strong>Current Move:</strong> {currentMove}
        </p>
        <p>
          <strong>History Length:</strong> {history.length}
        </p>
      </div>

      {/* Simple 3x3 grid for testing */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 60px)",
          gap: "5px",
          marginBottom: "1rem",
        }}
      >
        {currentSquares.map((square, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            style={{
              width: "60px",
              height: "60px",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {square}
          </button>
        ))}
      </div>

      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export { App };
```

```bash
# 2. Verificar funcionalidad:
npm run dev

# Checklist:
□ Tablero vacío al iniciar
□ Click coloca X o O alternadamente
□ Winner detectado correctamente
□ Draw detectado cuando tablero lleno sin winner
□ Reset limpia todo el juego
□ Refrescar página mantiene estado del juego (localStorage)
□ DevTools > Application > LocalStorage debe mostrar 'tictactoe-game-state'

# 3. Test localStorage persistence:
# - Jugar algunos movimientos
# - Refrescar página (F5)
# - Estado del juego debe mantenerse
# - Reset debe limpiar localStorage

# 4. Test history:
# - Jugar múltiples movimientos
# - history debe crecer
# - currentMove debe reflejar movimiento actual
```

### 📦 Estructura Esperada Post-Tarea:

```
src/hooks/
└── useTicTacToe.ts         (85-90 líneas)
```

### 📊 Métricas de Éxito:

- Hook maneja estado completo del juego
- History tracking funciona
- Jump-to-move funciona
- Reset funciona
- localStorage persistence funciona
- Winner y draw detection funcionan
- 0 errores TypeScript
- Estado se mantiene entre refreshes

**Estimate:** 5-6 horas

**Conflict Risk:** 0% (archivo independiente propio de Dev B)

**Dependencies:**

- Requiere A1 (proyecto setup)
- Requiere B1 (tictactoe utils - calculateWinner, isBoardFull)

**Blockers:** Ninguno

**💡 Notas:**

- Este hook encapsula toda la lógica del juego
- Facilita testing y reutilización
- localStorage maneja errores gracefully

---

## Tarea B3: Square Component

**Title:** Square Component - Celda del Tablero

**Assignee:** Dev B

**Status:** Todo

**Priority:** P0

**Labels:** tic-tac-toe, component

### Description

Crear componente Square para representar cada celda individual del tablero de Tic-Tac-Toe, con soporte para highlight de línea ganadora y estados disabled.

### 📁 Archivos a Crear:

```
└── src/components/Square/
    ├── Square.tsx                    # Componente principal
    ├── Square.module.css             # Estilos BEM
    └── index.ts                      # Barrel export
```

### ✅ Acceptance Criteria:

1. **Square.tsx - Interface:**

   - [ ] Interface ISquare definida:

     ```typescript
     import styles from "./Square.module.css";
     import { cx } from "../../utils/cx";
     import type { Square as SquareValue } from "../../utils/tictactoe";

     interface ISquare {
       value: SquareValue;
       onSquareClick: () => void;
       isWinner?: boolean;
       disabled?: boolean;
     }
     ```

2. **Square.tsx - Componente:**

   - [ ] Componente funcional simple:

     ```typescript
     function Square({ value, onSquareClick, isWinner = false, disabled = false }: ISquare) {
       const squareClasses = cx(styles.square, isWinner && styles["square--winner"], disabled && styles["square--disabled"]);

       return (
         <button className={squareClasses} onClick={onSquareClick} disabled={disabled}>
           {value}
         </button>
       );
     }

     export { Square };
     ```

3. **Square.module.css - Estilos BEM:**

   - [ ] Block (.square):

     ```css
     .square {
       width: 100%;
       aspect-ratio: 1;
       background-color: var(--color-white);
       border: 2px solid var(--color-gray-300);
       font-size: var(--font-size-3xl);
       font-weight: var(--font-weight-bold);
       color: var(--color-primary);
       cursor: pointer;
       transition: all var(--transition-base);
       display: flex;
       align-items: center;
       justify-content: center;
     }

     .square:hover:not(:disabled) {
       background-color: var(--color-gray-100);
       border-color: var(--color-primary);
     }

     .square:focus {
       outline: 2px solid var(--color-primary);
       outline-offset: 2px;
     }
     ```

   - [ ] Modifiers:

     ```css
     /* Winner highlight - green */
     .square--winner {
       background-color: #d1fae5;
       border-color: var(--color-success);
     }

     .square--winner:hover:not(:disabled) {
       background-color: #a7f3d0;
     }

     /* Disabled state */
     .square--disabled {
       cursor: not-allowed;
       opacity: 0.6;
     }
     ```

   - [ ] Responsive:
     ```css
     @media (max-width: 768px) {
       .square {
         font-size: var(--font-size-2xl);
       }
     }
     ```

4. **index.ts:**
   - [ ] Barrel export:
     ```typescript
     export { Square } from "./Square";
     ```

### 🧪 Cómo Probar:

```typescript
// 1. Crear prueba en src/App.tsx
import { Square } from "./components/Square";
import { useState } from "react";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i: number) {
    if (squares[i]) return;
    const newSquares = squares.slice();
    newSquares[i] = squares.filter(Boolean).length % 2 === 0 ? "X" : "O";
    setSquares(newSquares);
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Square Component Test</h1>

      {/* Test 1: Basic grid */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>Basic Functionality</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 100px)",
            gap: "8px",
            width: "fit-content",
          }}
        >
          {squares.map((square, i) => (
            <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
          ))}
        </div>
      </section>

      {/* Test 2: Winner highlight */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>Winner Highlight (Green)</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 100px)", gap: "8px", width: "fit-content" }}>
          <Square value="X" onSquareClick={() => {}} isWinner={true} />
          <Square value="X" onSquareClick={() => {}} isWinner={true} />
          <Square value="X" onSquareClick={() => {}} isWinner={true} />
        </div>
      </section>

      {/* Test 3: Disabled */}
      <section>
        <h2>Disabled State</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 100px)", gap: "8px", width: "fit-content" }}>
          <Square value="X" onSquareClick={() => {}} disabled={true} />
          <Square value="O" onSquareClick={() => {}} disabled={true} />
          <Square value={null} onSquareClick={() => {}} disabled={true} />
        </div>
      </section>

      <button onClick={() => setSquares(Array(9).fill(null))} style={{ marginTop: "1rem" }}>
        Reset
      </button>
    </div>
  );
}

export { App };
```

```bash
# 2. Verificar en navegador:
npm run dev

# Checklist:
□ Squares son cuadrados (aspect-ratio 1:1)
□ X y O son grandes y centrados
□ Hover effect cambia background y border
□ Winner squares tienen fondo verde
□ Disabled squares no son clickeables
□ Focus visible para keyboard navigation
□ Responsive en mobile

# 3. Accessibility checks:
# - Tab navigation funciona
# - Disabled squares no son focusables
# - Click funciona correctamente
```

### 📦 Estructura Esperada Post-Tarea:

```
src/components/Square/
├── Square.tsx              (25-30 líneas)
├── Square.module.css       (60-70 líneas)
└── index.ts                (1 línea)

Total: ~95 líneas de código
```

### 📊 Métricas de Éxito:

- Square renderiza correctamente
- Estados (normal, winner, disabled) funcionan
- Hover effects suaves
- Responsive
- Accessibility correcta
- 0 errores TypeScript

**Estimate:** 3-4 horas

**Conflict Risk:** 0% (componente específico de Tic-Tac-Toe)

**Dependencies:**

- Requiere A1 (proyecto setup)
- Requiere A2 (CSS variables)
- Requiere A4 (cx utility)
- Requiere B1 (types de tictactoe.ts)

**Blockers:** Ninguno

**💡 Notas:**

- Componente simple pero fundamental
- Aspect ratio mantiene forma cuadrada
- Winner highlight usa verde claro

---

## Tarea B4: Board Component

**Title:** Board Component - Tablero 3x3

**Assignee:** Dev B

**Status:** Todo

**Priority:** P0

**Labels:** tic-tac-toe, component

### Description

Crear componente Board que renderiza el tablero completo de 3x3 usando el componente Square, manejando clicks y mostrando línea ganadora.

### 📁 Archivos a Crear:

```
└── src/components/Board/
    ├── Board.tsx                     # Componente principal
    ├── Board.module.css              # Estilos BEM
    └── index.ts                      # Barrel export
```

### ✅ Acceptance Criteria:

1. **Board.tsx - Interface:**

   - [ ] Interface IBoard definida:

     ```typescript
     import { Square } from "../Square";
     import styles from "./Board.module.css";
     import type { Board as BoardType } from "../../utils/tictactoe";

     interface IBoard {
       squares: BoardType;
       onPlay: (squares: BoardType) => void;
       xIsNext: boolean;
       winningLine: number[];
       disabled: boolean;
     }
     ```

2. **Board.tsx - Componente:**

   - [ ] Función handleClick:

     ```typescript
     function Board({ squares, onPlay, xIsNext, winningLine, disabled }: IBoard) {
       function handleClick(i: number) {
         if (squares[i] || disabled) {
           return;
         }
         const nextSquares = squares.slice();
         nextSquares[i] = xIsNext ? "X" : "O";
         onPlay(nextSquares);
       }

       // Implementation
     }
     ```

   - [ ] Renderizado del grid:

     ```typescript
     return (
       <div className={styles.board}>
         {squares.map((square, i) => (
           <Square
             key={i}
             value={square}
             onSquareClick={() => handleClick(i)}
             isWinner={winningLine.includes(i)}
             disabled={disabled || square !== null}
           />
         ))}
       </div>
     );
     ```

   - [ ] Named export:
     ```typescript
     export { Board };
     ```

3. **Board.module.css - Estilos:**

   - [ ] Grid layout 3x3:

     ```css
     .board {
       display: grid;
       grid-template-columns: repeat(3, 1fr);
       gap: var(--space-sm);
       width: 100%;
       max-width: 400px;
       margin: 0 auto;
       padding: var(--space-md);
       background-color: var(--color-gray-50);
       border-radius: var(--border-radius-lg);
       box-shadow: var(--shadow-md);
     }
     ```

   - [ ] Responsive:

     ```css
     @media (max-width: 768px) {
       .board {
         max-width: 320px;
         padding: var(--space-sm);
         gap: var(--space-xs);
       }
     }

     @media (max-width: 480px) {
       .board {
         max-width: 280px;
       }
     }
     ```

4. **index.ts:**
   - [ ] Barrel export:
     ```typescript
     export { Board } from "./Board";
     ```

### 🧪 Cómo Probar:

```typescript
// 1. Crear prueba completa en src/App.tsx
import { Board } from "./components/Board";
import { useTicTacToe } from "./hooks/useTicTacToe";

function App() {
  const { currentSquares, xIsNext, winner, winningLine, isDraw, handlePlay, resetGame } = useTicTacToe();

  const getStatus = () => {
    if (winner) return `Winner: ${winner}`;
    if (isDraw) return "Draw!";
    return `Next player: ${xIsNext ? "X" : "O"}`;
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Board Component Test</h1>

      <div style={{ marginBottom: "1rem" }}>
        <h2>{getStatus()}</h2>
      </div>

      <Board squares={currentSquares} onPlay={handlePlay} xIsNext={xIsNext} winningLine={winningLine} disabled={!!winner || isDraw} />

      <button onClick={resetGame} style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
        Reset Game
      </button>
    </div>
  );
}

export { App };
```

```bash
# 2. Verificar funcionalidad completa:
npm run dev

# Checklist:
□ Tablero 3x3 se renderiza correctamente
□ Click en square vacío coloca X o O
□ X y O alternan correctamente
□ Winner line se destaca en verde
□ Board disabled después de winner
□ Board disabled después de draw
□ Reset limpia el tablero
□ Responsive en mobile, tablet, desktop
□ Estado persiste en localStorage (refresh mantiene juego)

# 3. Test de game flow completo:
# - Jugar hasta ganar horizontalmente → línea verde
# - Reset
# - Jugar hasta ganar verticalmente → línea verde
# - Reset
# - Jugar hasta ganar diagonalmente → línea verde
# - Reset
# - Jugar hasta empate → no winner, board disabled

# 4. Test responsive:
# - Desktop: tablero 400px
# - Mobile: tablero se ajusta a pantalla
# - Squares mantienen aspect ratio
```

### 📦 Estructura Esperada Post-Tarea:

```
src/components/Board/
├── Board.tsx               (35-40 líneas)
├── Board.module.css        (35-45 líneas)
└── index.ts                (1 línea)

Total: ~80 líneas de código
```

### 📊 Métricas de Éxito:

- Tablero 3x3 perfecto
- Lógica de juego funciona
- Winner line highlight funciona
- Disabled state correcto
- Responsive design
- 0 errores TypeScript
- Integración perfecta con useTicTacToe hook

**Estimate:** 4-5 horas

**Conflict Risk:** 0% (componente específico de Tic-Tac-Toe)

**Dependencies:**

- Requiere A1 (proyecto setup)
- Requiere A2 (CSS variables)
- Requiere B1 (types)
- Requiere B2 (useTicTacToe hook)
- Requiere B3 (Square component)

**Blockers:** Ninguno

**💡 Notas:**

- Board component orquesta toda la interacción
- Usa hook para toda la lógica
- Solo se preocupa de renderizado

---

## Tarea B5: TicTacToePage - Full Integration

**Title:** TicTacToePage - Página Principal del Juego

**Assignee:** Dev B

**Status:** Todo

**Priority:** P0

**Labels:** tic-tac-toe, page

### Description

Crear la página completa de Tic-Tac-Toe integrando Board, useTicTacToe hook, y agregando UI completa con status, history navigation, y reset button.

### 📁 Archivos a Crear:

```
└── src/pages/TicTacToePage/
    ├── TicTacToePage.tsx             # Página principal
    ├── TicTacToePage.module.css      # Estilos completos
    └── index.ts                      # Barrel export
```

### ✅ Acceptance Criteria:

1. **TicTacToePage.tsx - Imports y Hook:**

   - [ ] Imports necesarios:

     ```typescript
     import { useContext } from "react";
     import { Link } from "react-router-dom";
     import { I18nContext } from "../../contexts";
     import { Board, LanguagePicker, Breadcrumb } from "../../components";
     import { useTicTacToe } from "../../hooks/useTicTacToe";
     import styles from "./TicTacToePage.module.css";
     import { cx } from "../../utils/cx";
     ```

   - [ ] Usar hook:

     ```typescript
     function TicTacToePage() {
       const { t } = useContext(I18nContext);
       const { currentSquares, xIsNext, winner, winningLine, isDraw, history, currentMove, handlePlay, jumpTo, resetGame } = useTicTacToe();

       // Implementation...
     }
     ```

2. **Status Function:**

   - [ ] Función getStatus:
     ```typescript
     const getStatus = () => {
       if (winner) {
         return `${t("tictactoe-winner")}: ${winner}`;
       }
       if (isDraw) {
         return t("tictactoe-tied-game");
       }
       return `${t("tictactoe-next-player")}: ${xIsNext ? "X" : "O"}`;
     };
     ```

3. **History Buttons:**

   - [ ] Crear moves array con 10 slots (0-9):

     ```typescript
     const moves = history.map((_, move) => {
       const description = move === 0 ? t("tictactoe-game-start") : `${t("tictactoe-move")} ${move}`;

       if (move <= currentMove) {
         return (
           <button key={move} className={styles["tictactoe__history-button"]} onClick={() => jumpTo(move)}>
             {description}
           </button>
         );
       }

       return <div key={move} className={cx(styles["tictactoe__history-button"], styles["tictactoe__history-button--empty"])} />;
     });

     // Fill to 10 slots
     while (moves.length < 10) {
       moves.push(<div key={moves.length} className={cx(styles["tictactoe__history-button"], styles["tictactoe__history-button--empty"])} />);
     }
     ```

4. **JSX Structure:**

   - [ ] Header con Link, Breadcrumb, LanguagePicker
   - [ ] Main con Board
   - [ ] History section con Reset y Jump buttons
   - [ ] Named export

5. **TicTacToePage.module.css - Layout:**

   - [ ] Container principal:

     ```css
     .tictactoe {
       min-height: 100vh;
       display: flex;
       flex-direction: column;
       background-color: var(--color-gray-50);
     }

     .tictactoe__header {
       background-color: var(--color-white);
       box-shadow: var(--shadow-sm);
       padding: var(--space-lg);
     }

     .tictactoe__header-container {
       max-width: 1200px;
       margin: 0 auto;
       display: flex;
       align-items: center;
       gap: var(--space-lg);
     }

     .tictactoe__title {
       font-size: var(--font-size-2xl);
       font-weight: var(--font-weight-bold);
       color: var(--color-primary);
     }

     .tictactoe__link {
       color: inherit;
       text-decoration: none;
       transition: color var(--transition-base);
     }

     .tictactoe__link:hover {
       color: var(--color-secondary);
     }
     ```

   - [ ] Main content:

     ```css
     .tictactoe__main {
       flex: 1;
       display: flex;
       align-items: center;
       justify-content: center;
       padding: var(--space-2xl);
     }

     .tictactoe__content {
       width: 100%;
       max-width: 1000px;
     }

     .tictactoe__game-card {
       background-color: var(--color-white);
       border-radius: var(--border-radius-lg);
       box-shadow: var(--shadow-lg);
       padding: var(--space-2xl);
     }

     .tictactoe__game-container {
       display: grid;
       grid-template-columns: 1fr 1fr;
       gap: var(--space-2xl);
       align-items: start;
     }
     ```

   - [ ] Board section:

     ```css
     .tictactoe__board-section {
       display: flex;
       flex-direction: column;
       gap: var(--space-lg);
     }

     .tictactoe__status {
       font-size: var(--font-size-xl);
       font-weight: var(--font-weight-bold);
       color: var(--color-primary);
       text-align: center;
       padding: var(--space-md);
       background-color: var(--color-gray-100);
       border-radius: var(--border-radius-md);
     }

     .tictactoe__board-wrapper {
       display: flex;
       justify-content: center;
     }
     ```

   - [ ] History section:

     ```css
     .tictactoe__history-section {
       display: flex;
       flex-direction: column;
       gap: var(--space-md);
     }

     .tictactoe__reset-button {
       padding: var(--space-md) var(--space-lg);
       font-size: var(--font-size-base);
       font-weight: var(--font-weight-bold);
       background-color: var(--color-primary);
       color: var(--color-white);
       border: none;
       border-radius: var(--border-radius-md);
       cursor: pointer;
       transition: background-color var(--transition-base);
     }

     .tictactoe__reset-button:hover {
       background-color: var(--color-secondary);
     }

     .tictactoe__history-title {
       font-size: var(--font-size-lg);
       font-weight: var(--font-weight-bold);
       color: var(--color-primary);
     }

     .tictactoe__history-list {
       display: flex;
       flex-direction: column;
       gap: var(--space-sm);
     }

     .tictactoe__history-button {
       padding: var(--space-sm) var(--space-md);
       font-size: var(--font-size-sm);
       background-color: var(--color-gray-100);
       border: 1px solid var(--color-gray-300);
       border-radius: var(--border-radius-sm);
       cursor: pointer;
       transition: all var(--transition-base);
       text-align: left;
     }

     .tictactoe__history-button:hover {
       background-color: var(--color-gray-200);
       border-color: var(--color-primary);
     }

     .tictactoe__history-button--empty {
       background-color: transparent;
       border-color: transparent;
       cursor: default;
       opacity: 0.3;
     }
     ```

   - [ ] Responsive:

     ```css
     @media (max-width: 768px) {
       .tictactoe__game-container {
         grid-template-columns: 1fr;
       }

       .tictactoe__main {
         padding: var(--space-lg);
       }

       .tictactoe__game-card {
         padding: var(--space-lg);
       }

       .tictactoe__header-container {
         flex-direction: column;
         align-items: flex-start;
         gap: var(--space-md);
       }
     }
     ```

6. **index.ts:**
   - [ ] Barrel export:
     ```typescript
     export { TicTacToePage } from "./TicTacToePage";
     ```

### 🧪 Cómo Probar:

```bash
# 1. Iniciar dev server
npm run dev

# 2. Navegar a /tic-tac-toe manualmente en URL

# Checklist completo:
□ Header muestra título "React Showcase" como link
□ Breadcrumb muestra "ReactDev Tic-Tac-Toe"
□ LanguagePicker funciona (EN/ES)
□ Traducciones cambian al cambiar idioma
□ Status muestra "Next player: X" al inicio
□ Click en tablero coloca X/O
□ Status actualiza correctamente
□ Winner muestra "Winner: X" o "Winner: O"
□ Draw muestra "Tied Game"
□ History buttons muestran "Game Start", "Move 1", etc.
□ Click en history button salta a ese movimiento
□ Reset limpia todo y vuelve a inicio
□ LocalStorage persiste estado (refresh mantiene juego)
□ Responsive en mobile/tablet/desktop
□ Link "React Showcase" vuelve a home

# 3. Test i18n:
# - Cambiar a Español
# - "Ganador:", "Siguiente jugador:", "Juego Empatado"
# - "Reiniciar", "Ir a:", "Inicio del Juego", "Movimiento"

# 4. Test full game flow:
# Flow 1: Winner
# - Jugar hasta ganar
# - Ver línea verde en tablero
# - Ver "Winner: X"
# - Click en "Move 2" → salta atrás
# - Click en "Move 5" → salta adelante
# - Reset → todo limpio

# Flow 2: Draw
# - Jugar hasta empate
# - Ver "Tied Game"
# - Tablero disabled
# - Reset funciona

# 5. Test localStorage:
# - Jugar 3 movimientos
# - Refrescar página (F5)
# - Estado debe mantenerse exactamente igual
# - History debe mantener movimientos
# - Reset debe limpiar localStorage
```

### 📦 Estructura Esperada Post-Tarea:

```
src/pages/TicTacToePage/
├── TicTacToePage.tsx        (125-130 líneas)
├── TicTacToePage.module.css (180-200 líneas)
└── index.ts                 (1 línea)

Total: ~320 líneas de código
```

### 📊 Métricas de Éxito:

- Página completa funcional
- UI pulida y responsive
- History navigation funciona
- i18n completo
- localStorage persistence
- Integración perfecta con todos los componentes
- 0 errores TypeScript
- Experiencia de usuario fluida

**Estimate:** 8-10 horas

**Conflict Risk:**

- 15% con Dev A (usa Breadcrumb, LanguagePicker - pueden estar en desarrollo)
- 10% con Dev C (locales JSONs - Section Strategy: Dev B agrega en su sección)

**Dependencies:**

- Requiere A1 (proyecto setup)
- Requiere A2 (CSS variables)
- Requiere A3 (i18n Context)
- Requiere A4 (cx utility)
- Requiere B1 (utils)
- Requiere B2 (useTicTacToe hook)
- Requiere B3 (Square)
- Requiere B4 (Board)
- Opcionales: LanguagePicker, Breadcrumb (Dev A puede estar trabajando en ellos)

**Blockers:** Ninguno crítico (puede usar i18n básico si LanguagePicker no está listo)

**💡 Notas:**

- **Conflicto con locales:** Dev B agrega sus keys en sección marcada
- Esta es la integración final de todo el mini-proyecto Tic-Tac-Toe
- Página standalone, no depende de Router todavía
- Puede probarse navegando directamente a /tic-tac-toe

---

## Tarea B6: Locale Keys Addition (Tic-Tac-Toe)

**Title:** Agregar Translation Keys para Tic-Tac-Toe

**Assignee:** Dev B

**Status:** Todo

**Priority:** P1

**Labels:** i18n, tic-tac-toe

### Description

Agregar todas las translation keys necesarias para Tic-Tac-Toe en ambos locales (en.json y es.json) usando la **Section Strategy** para minimizar conflictos de merge.

### 📁 Archivos a Editar:

```
└── src/locales/
    ├── en.json                       # Agregar keys EN
    └── es.json                       # Agregar keys ES
```

### ✅ Acceptance Criteria:

1. **Section Strategy:**

   - [ ] Agregar keys dentro de sección marcada:

     ```json
     {
       "app-title": "React Showcase",

       // === TIC-TAC-TOE SECTION (Dev B) ===
       "tictactoe-winner": "Winner",
       "tictactoe-next-player": "Next player",
       "tictactoe-tied-game": "Tied Game",
       "tictactoe-reset": "Reset",
       "tictactoe-goto": "Go to:",
       "tictactoe-game-start": "Game Start",
       "tictactoe-move": "Move",
       // === END TIC-TAC-TOE ===

       "project-tictactoe": "ReactDev Tic-Tac-Toe"
     }
     ```

2. **en.json - English Keys:**

   - [ ] `"tictactoe-winner": "Winner"`
   - [ ] `"tictactoe-next-player": "Next player"`
   - [ ] `"tictactoe-tied-game": "Tied Game"`
   - [ ] `"tictactoe-reset": "Reset"`
   - [ ] `"tictactoe-goto": "Go to:"`
   - [ ] `"tictactoe-game-start": "Game Start"`
   - [ ] `"tictactoe-move": "Move"`
   - [ ] `"project-tictactoe": "ReactDev Tic-Tac-Toe"` (si no existe)

3. **es.json - Spanish Keys:**

   - [ ] `"tictactoe-winner": "Ganador"`
   - [ ] `"tictactoe-next-player": "Siguiente jugador"`
   - [ ] `"tictactoe-tied-game": "Juego Empatado"`
   - [ ] `"tictactoe-reset": "Reiniciar"`
   - [ ] `"tictactoe-goto": "Ir a:"`
   - [ ] `"tictactoe-game-start": "Inicio del Juego"`
   - [ ] `"tictactoe-move": "Movimiento"`
   - [ ] `"project-tictactoe": "ReactDev Tres en Raya"` (si no existe)

4. **JSON Validity:**
   - [ ] Ambos archivos deben ser JSON válido
   - [ ] No trailing commas
   - [ ] Todas las strings con comillas dobles

### 🧪 Cómo Probar:

```bash
# 1. Validar JSON
npm run dev
# No debe haber errores de parsing

# 2. En TicTacToePage, verificar traducciones:

# English (EN):
# - "Next player: X"
# - "Winner: X"
# - "Tied Game"
# - "Reset"
# - "Go to:"
# - "Game Start"
# - "Move 1", "Move 2", etc.

# Spanish (ES):
# - "Siguiente jugador: X"
# - "Ganador: X"
# - "Juego Empatado"
# - "Reiniciar"
# - "Ir a:"
# - "Inicio del Juego"
# - "Movimiento 1", "Movimiento 2", etc.

# 3. Test cambio de idioma dinámico:
# - Iniciar juego en EN
# - Cambiar a ES
# - Todas las strings deben cambiar inmediatamente
# - Cambiar de vuelta a EN
```

### 📦 Estructura Esperada Post-Tarea:

```
src/locales/
├── en.json                   (~40 líneas con comentarios)
├── es.json                   (~40 líneas con comentarios)
```

### 📊 Métricas de Éxito:

- Todas las keys agregadas correctamente
- JSON válido en ambos archivos
- Traducciones funcionan en TicTacToePage
- Cambio de idioma dinámico funciona
- Section comments claros
- 0 errores de parsing

**Estimate:** 1-2 horas

**Conflict Risk:**

- 30% con Dev C (también editará locales)
- **Mitigation:** Usar Section Strategy con comentarios claros
- Comunicación: "Yo agrego mis keys en sección TIC-TAC-TOE"

**Dependencies:**

- Requiere A3 (i18n Context)
- Requiere B5 (TicTacToePage usa estas keys)

**Blockers:** Ninguno

**💡 Notas:**

- **IMPORTANTE:** Agregar keys dentro de sección marcada con comentarios
- Esto minimiza merge conflicts con Dev C
- Si hay conflicto, es fácil de resolver viendo las secciones

---

## Tarea B7: Export Components & Finalize

**Title:** Exportar Componentes en Barrel y Finalizar Tic-Tac-Toe

**Assignee:** Dev B

**Status:** Todo

**Priority:** P1

**Labels:** tic-tac-toe, export

### Description

Agregar exports de Square y Board al barrel de componentes (src/components/index.ts) y verificar que todo el módulo Tic-Tac-Toe está completo y funcional.

### 📁 Archivos a Editar:

```
└── src/components/
    └── index.ts                      # Agregar exports
```

### ✅ Acceptance Criteria:

1. **Agregar Exports:**

   - [ ] Editar `src/components/index.ts`:

     ```typescript
     export { Button } from "./Button";
     export { Input } from "./Input";

     // Tic-Tac-Toe Components (Dev B)
     export { Square } from "./Square";
     export { Board } from "./Board";
     ```

2. **Verification Checklist:**

   - [ ] TicTacToePage funciona completamente
   - [ ] Todos los componentes importan correctamente
   - [ ] 0 errores TypeScript
   - [ ] 0 warnings en consola
   - [ ] localStorage funciona
   - [ ] i18n funciona
   - [ ] Responsive funciona
   - [ ] Todas las features funcionan

3. **Code Quality:**

   - [ ] Todos los archivos usan named exports
   - [ ] Todas las interfaces siguen patrón IComponentName
   - [ ] CSS sigue BEM convention
   - [ ] CSS usa variables
   - [ ] No console.logs en código

4. **Documentation:**
   - [ ] Comentarios en código complejo (si aplica)
   - [ ] Types exportados correctamente

### 🧪 Cómo Probar:

```bash
# 1. Build test
npm run build
# Debe completar sin errores

# 2. Dev mode
npm run dev
# No errores en consola

# 3. TypeScript check
npx tsc --noEmit
# 0 errores

# 4. Full game test:
# - Navegar a /tic-tac-toe
# - Jugar juego completo hasta ganar
# - Usar history navigation
# - Reset
# - Jugar hasta empate
# - Reset
# - Cambiar idioma multiple veces
# - Refrescar página → estado persiste
# - Todo debe funcionar perfectamente

# 5. Import test:
# Crear archivo test temporal:
```

```typescript
// test-imports.ts
import { Square, Board } from "./components";

// Si esto compila sin errores, exports están bien
console.log("Tic-Tac-Toe components exported correctly");
```

```bash
# Eliminar archivo de prueba después
```

### 📦 Estructura Final del Módulo Tic-Tac-Toe:

```
src/
├── utils/
│   └── tictactoe.ts              (types + game logic utils)
├── hooks/
│   └── useTicTacToe.ts           (game state hook)
├── components/
│   ├── Square/                   (celda individual)
│   │   ├── Square.tsx
│   │   ├── Square.module.css
│   │   └── index.ts
│   ├── Board/                    (tablero 3x3)
│   │   ├── Board.tsx
│   │   ├── Board.module.css
│   │   └── index.ts
│   └── index.ts                  (barrel exports)
├── pages/
│   └── TicTacToePage/            (página principal)
│       ├── TicTacToePage.tsx
│       ├── TicTacToePage.module.css
│       └── index.ts
└── locales/
    ├── en.json                   (traducciones EN)
    └── es.json                   (traducciones ES)
```

### 📊 Métricas de Éxito:

- Exports agregados correctamente
- Build exitoso
- TypeScript sin errores
- Juego completamente funcional
- Código limpio y bien estructurado
- Documentación básica presente

**Estimate:** 1-2 horas (principalmente testing y cleanup)

**Conflict Risk:**

- 10% con Dev A (también edita components/index.ts)
- **Mitigation:** Agregar exports al final con comentario "Tic-Tac-Toe"

**Dependencies:**

- Requiere B1, B2, B3, B4, B5, B6 (todas las tareas anteriores)

**Blockers:** Ninguno

**💡 Notas:**

- Esta tarea cierra el módulo Tic-Tac-Toe
- Después de esto, Dev B puede ayudar a otros devs o hacer code review
- El módulo debe ser **completamente funcional e independiente**

---

# 🎮 DEV C TASKS - Poke Collection

## Tarea C1: Pokemon Types & Interfaces

**Title:** Types - Interfaces Pokemon y Favorites

**Assignee:** Dev C

**Status:** Todo

**Priority:** P0

**Labels:** poke-collection, types, foundation

### Description

Crear todas las interfaces TypeScript necesarias para trabajar con la PokeAPI y la API de Favorites, incluyendo Pokemon, FavoritePokemon, FavoriteResponse, y PokemonType.

### 📁 Archivos a Crear:

```
└── src/types/
    └── pokemon.ts                    # Todas las interfaces
```

### ✅ Acceptance Criteria:

1. **Pokemon Interface (PokeAPI):**

   - [ ] Interface completa:
     ```typescript
     export interface Pokemon {
       id: number;
       name: string;
       height: number;
       weight: number;
       sprites: {
         other: {
           "official-artwork": {
             front_default: string;
           };
         };
       };
       types: Array<{
         type: {
           name: string;
         };
       }>;
     }
     ```

2. **Favorite Pokemon Interface:**

   - [ ] Interface para favoritos:
     ```typescript
     export interface FavoritePokemon {
       id: number;
       pokemonId: number;
       name: string;
       imageUrl: string;
       types: string[];
     }
     ```

3. **Favorite Response Interface:**

   - [ ] Interface para API response:
     ```typescript
     export interface FavoriteResponse {
       id: number;
       pokemonId: number;
       name: string;
       imageUrl: string;
       types: string[];
     }
     ```

4. **Pokemon Type Union:**
   - [ ] Type con todos los 18 tipos Pokemon:
     ```typescript
     export type PokemonType =
       | "normal"
       | "fighting"
       | "flying"
       | "poison"
       | "ground"
       | "rock"
       | "bug"
       | "ghost"
       | "steel"
       | "fire"
       | "water"
       | "grass"
       | "electric"
       | "psychic"
       | "ice"
       | "dragon"
       | "dark"
       | "fairy"
       | "unknown";
     ```

### 🧪 Cómo Probar:

```typescript
// 1. Crear archivo de prueba: test-types.ts
import type { Pokemon, FavoritePokemon, FavoriteResponse, PokemonType } from "./types/pokemon";

// Test 1: Pokemon type
const pokemon: Pokemon = {
  id: 25,
  name: "pikachu",
  height: 4,
  weight: 60,
  sprites: {
    other: {
      "official-artwork": {
        front_default: "https://example.com/pikachu.png",
      },
    },
  },
  types: [{ type: { name: "electric" } }],
};

// Test 2: FavoritePokemon type
const favorite: FavoritePokemon = {
  id: 1,
  pokemonId: 25,
  name: "pikachu",
  imageUrl: "https://example.com/pikachu.png",
  types: ["electric"],
};

// Test 3: PokemonType union
const validType: PokemonType = "fire";
const anotherType: PokemonType = "water";

// Test 4: Type checking should catch errors
// const invalidType: PokemonType = "invalid"; // ❌ Error esperado

console.log("✅ All types are correctly defined");
```

```bash
# 2. Verificar TypeScript
npx tsc --noEmit
# No debe haber errores

# 3. Eliminar archivo de prueba
rm test-types.ts
```

### 📦 Estructura Esperada Post-Tarea:

```
src/types/
└── pokemon.ts                  (55-60 líneas)
```

### 📊 Métricas de Éxito:

- Todas las interfaces correctamente tipadas
- PokemonType incluye los 18 tipos
- TypeScript strict mode pasa
- Interfaces reflejan exactamente las APIs
- 0 errores de compilación

**Estimate:** 2-3 horas

**Conflict Risk:** 0% (archivo independiente propio de Dev C)

**Dependencies:**

- Requiere A1 (proyecto setup con TypeScript)

**Blockers:** Ninguno

**💡 Notas:**

- Estas interfaces son la base de todo el módulo Poke Collection
- Pokemon interface sigue estructura de PokeAPI v2
- FavoritePokemon y FavoriteResponse pueden parecer similares pero tienen propósitos distintos

---

## Tarea C2: Pokemon API Service

**Title:** Pokemon API Service - Fetch Pokemon y Favorites

**Assignee:** Dev C

**Status:** Todo

**Priority:** P0

**Labels:** poke-collection, api, service

### Description

Crear servicio para interactuar con PokeAPI y la API de Favorites (Poke Collection Lite), incluyendo fetch pokemon, fetch favorites, add to favorites, remove from favorites, y reset favorites.

### 📁 Archivos a Crear:

```
└── src/services/
    └── pokemonApi.ts                 # API service functions
```

### ✅ Acceptance Criteria:

1. **Constants:**

   - [ ] URLs de las APIs:

     ```typescript
     import { Pokemon, FavoritePokemon, FavoriteResponse } from "../types/pokemon";

     const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";
     const FAVORITES_API_BASE_URL = "https://poke-collection-lite-production.up.railway.app/api";
     ```

2. **fetchPokemon Function:**

   - [ ] Función para buscar Pokemon por nombre o ID:
     ```typescript
     export async function fetchPokemon(nameOrId: string): Promise<Pokemon> {
       const response = await fetch(`${POKEAPI_BASE_URL}/pokemon/${nameOrId.toLowerCase()}`);
       if (!response.ok) {
         throw new Error("Pokemon not found");
       }
       return response.json();
     }
     ```

3. **fetchFavorites Function:**

   - [ ] Función para obtener favoritos de usuario:

     ```typescript
     export async function fetchFavorites(username: string): Promise<FavoritePokemon[]> {
       const response = await fetch(`${FAVORITES_API_BASE_URL}/${username}/favorites`);
       if (!response.ok) {
         throw new Error("User not found");
       }
       const result = await response.json();

       const favorites = result.data || result;

       // Enrich favorites with full Pokemon data
       const enrichedFavorites = await Promise.all(
         favorites.map(async (fav: any) => {
           try {
             const pokemonResponse = await fetch(`${POKEAPI_BASE_URL}/pokemon/${fav.name.toLowerCase()}`);
             if (pokemonResponse.ok) {
               const pokemon = await pokemonResponse.json();
               return {
                 id: fav.id || fav.pokemonId || pokemon.id,
                 pokemonId: pokemon.id,
                 name: fav.name,
                 imageUrl: pokemon.sprites.other["official-artwork"].front_default,
                 types: fav.types || pokemon.types.map((t: any) => t.type.name),
               };
             }
           } catch (error) {
             // Fallback
           }

           return {
             id: fav.id || fav.pokemonId || 0,
             pokemonId: fav.pokemonId || 0,
             name: fav.name,
             imageUrl: fav.avatarUrl || fav.imageUrl || "",
             types: fav.types || [],
           };
         })
       );

       return enrichedFavorites;
     }
     ```

4. **addToFavorites Function:**

   - [ ] Función para agregar Pokemon a favoritos:

     ```typescript
     export async function addToFavorites(username: string, pokemon: Pokemon): Promise<FavoriteResponse> {
       const payload = {
         pokemonId: pokemon.id,
         name: pokemon.name,
         imageUrl: pokemon.sprites.other["official-artwork"].front_default,
         types: pokemon.types.map(t => t.type.name),
       };

       const response = await fetch(`${FAVORITES_API_BASE_URL}/${username}/favorites`, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(payload),
       });

       // Handle 409 (conflict) - Pokemon already exists
       if (response.status === 409) {
         return {
           id: pokemon.id,
           pokemonId: pokemon.id,
           name: pokemon.name,
           imageUrl: pokemon.sprites.other["official-artwork"].front_default,
           types: pokemon.types.map(t => t.type.name),
         };
       }

       if (!response.ok) {
         throw new Error("Failed to add to favorites");
       }

       const result = await response.json();
       const data = result.data || result;

       return {
         id: data.id || data.pokemonId || pokemon.id,
         pokemonId: data.pokemonId || data.id || pokemon.id,
         name: data.name || pokemon.name,
         imageUrl: data.avatarUrl || data.imageUrl || pokemon.sprites.other["official-artwork"].front_default,
         types: data.types || pokemon.types.map(t => t.type.name),
       };
     }
     ```

5. **removeFromFavorites Function:**

   - [ ] Función para remover Pokemon de favoritos:

     ```typescript
     export async function removeFromFavorites(username: string, pokemonIdOrName: number | string): Promise<void> {
       const response = await fetch(`${FAVORITES_API_BASE_URL}/${username}/favorites/${pokemonIdOrName}`, {
         method: "DELETE",
       });

       if (!response.ok) {
         throw new Error("Failed to remove from favorites");
       }
     }
     ```

6. **resetFavorites Function:**

   - [ ] Función para reset completo:

     ```typescript
     export async function resetFavorites(username: string): Promise<void> {
       const response = await fetch(`${FAVORITES_API_BASE_URL}/${username}/reset`, {
         method: "POST",
       });

       if (!response.ok) {
         throw new Error("Failed to reset favorites");
       }
     }
     ```

### 🧪 Cómo Probar:

```typescript
// 1. Crear archivo de prueba en src/App.tsx
import { useEffect, useState } from "react";
import { fetchPokemon, fetchFavorites, addToFavorites, removeFromFavorites, resetFavorites } from "./services/pokemonApi";
import type { Pokemon, FavoritePokemon } from "./types/pokemon";

function App() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [favorites, setFavorites] = useState<FavoritePokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const testUsername = "testuser123";

  async function testFetchPokemon() {
    try {
      setLoading(true);
      setError("");
      const poke = await fetchPokemon("pikachu");
      setPokemon(poke);
      console.log("✅ fetchPokemon OK:", poke);
    } catch (err: any) {
      setError(err.message);
      console.error("❌ fetchPokemon failed:", err);
    } finally {
      setLoading(false);
    }
  }

  async function testAddToFavorites() {
    if (!pokemon) {
      alert("Fetch a Pokemon first!");
      return;
    }
    try {
      setLoading(true);
      const result = await addToFavorites(testUsername, pokemon);
      console.log("✅ addToFavorites OK:", result);
      await testFetchFavorites(); // Refresh list
    } catch (err: any) {
      setError(err.message);
      console.error("❌ addToFavorites failed:", err);
    } finally {
      setLoading(false);
    }
  }

  async function testFetchFavorites() {
    try {
      setLoading(true);
      const favs = await fetchFavorites(testUsername);
      setFavorites(favs);
      console.log("✅ fetchFavorites OK:", favs);
    } catch (err: any) {
      setError(err.message);
      console.error("❌ fetchFavorites failed:", err);
    } finally {
      setLoading(false);
    }
  }

  async function testRemoveFromFavorites(pokemonId: number) {
    try {
      setLoading(true);
      await removeFromFavorites(testUsername, pokemonId);
      console.log("✅ removeFromFavorites OK");
      await testFetchFavorites(); // Refresh list
    } catch (err: any) {
      setError(err.message);
      console.error("❌ removeFromFavorites failed:", err);
    } finally {
      setLoading(false);
    }
  }

  async function testReset() {
    try {
      setLoading(true);
      await resetFavorites(testUsername);
      console.log("✅ resetFavorites OK");
      await testFetchFavorites(); // Refresh list
    } catch (err: any) {
      setError(err.message);
      console.error("❌ resetFavorites failed:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "monospace" }}>
      <h1>Pokemon API Service Test</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <section style={{ marginBottom: "2rem" }}>
        <h2>1. Fetch Pokemon</h2>
        <button onClick={testFetchPokemon}>Fetch Pikachu</button>
        {pokemon && (
          <div>
            <p>
              <strong>ID:</strong> {pokemon.id}
            </p>
            <p>
              <strong>Name:</strong> {pokemon.name}
            </p>
            <p>
              <strong>Height:</strong> {pokemon.height}
            </p>
            <p>
              <strong>Weight:</strong> {pokemon.weight}
            </p>
            <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} width="150" />
            <p>
              <strong>Types:</strong> {pokemon.types.map(t => t.type.name).join(", ")}
            </p>
          </div>
        )}
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>2. Add to Favorites</h2>
        <button onClick={testAddToFavorites} disabled={!pokemon}>
          Add Pikachu to Favorites
        </button>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>3. Fetch Favorites</h2>
        <button onClick={testFetchFavorites}>Get Favorites</button>
        <div>
          <strong>Favorites ({favorites.length}):</strong>
          {favorites.map(fav => (
            <div key={fav.id} style={{ border: "1px solid #ccc", padding: "1rem", margin: "0.5rem 0" }}>
              <p>
                <strong>ID:</strong> {fav.pokemonId}
              </p>
              <p>
                <strong>Name:</strong> {fav.name}
              </p>
              <p>
                <strong>Types:</strong> {fav.types.join(", ")}
              </p>
              <img src={fav.imageUrl} alt={fav.name} width="100" />
              <button onClick={() => testRemoveFromFavorites(fav.pokemonId)}>Remove</button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>4. Reset Favorites</h2>
        <button onClick={testReset}>Reset All Favorites</button>
      </section>
    </div>
  );
}

export { App };
```

```bash
# 2. Verificar en navegador:
npm run dev

# Checklist completo:
□ "Fetch Pikachu" → muestra datos de Pikachu
□ "Add Pikachu to Favorites" → agrega correctamente
□ "Get Favorites" → lista incluye Pikachu
□ Click "Remove" → elimina de favoritos
□ "Get Favorites" → lista ya no incluye Pikachu
□ "Reset All Favorites" → limpia todo
□ "Get Favorites" → lista vacía

# 3. Test error cases:
# - Buscar Pokemon que no existe: fetchPokemon("asdfasdf")
#   → Debe mostrar error "Pokemon not found"
# - Fetch favorites de usuario que no existe: fetchFavorites("nonexistentuser999")
#   → Puede crear usuario o dar error

# 4. Test edge cases:
# - Agregar mismo Pokemon dos veces → handle 409 conflict
# - Remove Pokemon que no está en favorites → handle error
```

### 📦 Estructura Esperada Post-Tarea:

```
src/services/
└── pokemonApi.ts               (125-130 líneas)
```

### 📊 Métricas de Éxito:

- Todas las funciones implementadas
- fetchPokemon funciona con PokeAPI
- fetchFavorites funciona con API de Favorites
- addToFavorites maneja duplicados (409)
- removeFromFavorites funciona
- resetFavorites funciona
- Error handling correcto
- TypeScript types correctos
- 0 errores

**Estimate:** 6-8 horas

**Conflict Risk:** 0% (archivo independiente propio de Dev C)

**Dependencies:**

- Requiere A1 (proyecto setup)
- Requiere C1 (types/pokemon.ts)

**Blockers:**

- Necesita conexión a internet (APIs externas)
- API de Favorites debe estar online

**💡 Notas:**

- fetchFavorites hace enrichment con PokeAPI para obtener imágenes
- addToFavorites maneja 409 conflict gracefully
- Error handling robusto para APIs externas
- Funciones async/await para mejor legibilidad

---

## Tarea C3: Pokemon Helper Functions

**Title:** Pokemon Helpers - Formateo y Colores

**Assignee:** Dev C

**Status:** Todo

**Priority:** P0

**Labels:** poke-collection, utils

### Description

Crear funciones helper para formatear datos de Pokemon (ID, weight, height, name) y obtener colores por tipo de Pokemon.

### 📁 Archivos a Crear:

```
└── src/utils/
    └── pokemonHelpers.ts             # Helper functions
```

### ✅ Acceptance Criteria:

1. **getPokemonTypeColor Function:**

   - [ ] Función que retorna CSS variable según tipo:

     ```typescript
     import type { PokemonType } from "../types/pokemon";

     export function getPokemonTypeColor(type: string): string {
       const typeMap: Record<string, string> = {
         normal: "var(--type-normal)",
         fighting: "var(--type-fighting)",
         flying: "var(--type-flying)",
         poison: "var(--type-poison)",
         ground: "var(--type-ground)",
         rock: "var(--type-rock)",
         bug: "var(--type-bug)",
         ghost: "var(--type-ghost)",
         steel: "var(--type-steel)",
         fire: "var(--type-fire)",
         water: "var(--type-water)",
         grass: "var(--type-grass)",
         electric: "var(--type-electric)",
         psychic: "var(--type-psychic)",
         ice: "var(--type-ice)",
         dragon: "var(--type-dragon)",
         dark: "var(--type-dark)",
         fairy: "var(--type-fairy)",
         unknown: "var(--type-unknown)",
       };

       return typeMap[type.toLowerCase()] || typeMap.unknown;
     }
     ```

2. **formatPokemonId Function:**

   - [ ] Formato #001, #025, etc:
     ```typescript
     export function formatPokemonId(id: number | undefined): string {
       if (!id) return "#???";
       return `#${String(id).padStart(3, "0")}`;
     }
     ```

3. **formatWeight Function:**

   - [ ] Convertir hectograms a kg:
     ```typescript
     export function formatWeight(weight: number): string {
       // Weight is in hectograms, convert to kg
       return `${(weight / 10).toFixed(1)} kg`;
     }
     ```

4. **formatHeight Function:**

   - [ ] Convertir decimeters a meters:
     ```typescript
     export function formatHeight(height: number): string {
       // Height is in decimeters, convert to meters
       return `${(height / 10).toFixed(1)} m`;
     }
     ```

5. **capitalizeName Function:**
   - [ ] Primera letra mayúscula:
     ```typescript
     export function capitalizeName(name: string): string {
       if (!name) return "";
       return name.charAt(0).toUpperCase() + name.slice(1);
     }
     ```

### 🧪 Cómo Probar:

```typescript
// 1. Crear archivo de prueba en src/App.tsx
import { getPokemonTypeColor, formatPokemonId, formatWeight, formatHeight, capitalizeName } from "./utils/pokemonHelpers";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "monospace" }}>
      <h1>Pokemon Helpers Test</h1>

      {/* Test 1: getPokemonTypeColor */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>1. Type Colors</h2>
        {["fire", "water", "grass", "electric", "psychic", "dragon", "fairy", "unknown"].map(type => {
          const color = getPokemonTypeColor(type);
          return (
            <div key={type} style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
              <div
                style={{
                  width: "50px",
                  height: "30px",
                  backgroundColor: color,
                  border: "1px solid #ccc",
                }}
              />
              <span>
                {type}: {color}
              </span>
            </div>
          );
        })}
      </section>

      {/* Test 2: formatPokemonId */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>2. Pokemon ID Format</h2>
        <p>ID 1: {formatPokemonId(1)} (expected: #001)</p>
        <p>ID 25: {formatPokemonId(25)} (expected: #025)</p>
        <p>ID 150: {formatPokemonId(150)} (expected: #150)</p>
        <p>ID undefined: {formatPokemonId(undefined)} (expected: #???)</p>
      </section>

      {/* Test 3: formatWeight */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>3. Weight Format</h2>
        <p>Weight 60 (hectograms): {formatWeight(60)} (expected: 6.0 kg)</p>
        <p>Weight 85 (hectograms): {formatWeight(85)} (expected: 8.5 kg)</p>
        <p>Weight 1500 (hectograms): {formatWeight(1500)} (expected: 150.0 kg)</p>
      </section>

      {/* Test 4: formatHeight */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>4. Height Format</h2>
        <p>Height 4 (decimeters): {formatHeight(4)} (expected: 0.4 m)</p>
        <p>Height 10 (decimeters): {formatHeight(10)} (expected: 1.0 m)</p>
        <p>Height 35 (decimeters): {formatHeight(35)} (expected: 3.5 m)</p>
      </section>

      {/* Test 5: capitalizeName */}
      <section>
        <h2>5. Capitalize Name</h2>
        <p>pikachu → {capitalizeName("pikachu")}</p>
        <p>charizard → {capitalizeName("charizard")}</p>
        <p>bulbasaur → {capitalizeName("bulbasaur")}</p>
        <p>empty → "{capitalizeName("")}"</p>
      </section>
    </div>
  );
}

export { App };
```

```bash
# 2. Verificar en navegador:
npm run dev

# Checklist:
□ Type colors muestran colores correctos (fire=naranja, water=azul, grass=verde, etc.)
□ #001, #025, #150 formatean correctamente
□ #??? para undefined
□ 6.0 kg, 8.5 kg formatean correctamente
□ 0.4 m, 1.0 m, 3.5 m formatean correctamente
□ Pikachu, Charizard, Bulbasaur capitalizan correctamente

# 3. TypeScript check:
npx tsc --noEmit
# No errores
```

### 📦 Estructura Esperada Post-Tarea:

```
src/utils/
├── cx.ts                       (ya existe - Dev A)
├── tictactoe.ts                (ya existe - Dev B)
└── pokemonHelpers.ts           (45-50 líneas - Dev C)
```

### 📊 Métricas de Éxito:

- Todas las funciones implementadas
- Type colors usan CSS variables
- Formatos correctos (ID, peso, altura)
- capitalizeName maneja edge cases
- TypeScript strict mode pasa
- 0 errores

**Estimate:** 2-3 horas

**Conflict Risk:** 0% (archivo independiente propio de Dev C)

**Dependencies:**

- Requiere A1 (proyecto setup)
- Requiere A2 (CSS variables con type colors)
- Requiere C1 (types/pokemon.ts)

**Blockers:** Ninguno

**💡 Notas:**

- getPokemonTypeColor es crítico para TypeBadge component
- Formatos siguen convenciones de PokeAPI
- Funciones puras, fácil de testear

---

## Tarea C4: TypeBadge Component

**Title:** TypeBadge - Badge para Tipos Pokemon

**Assignee:** Dev C

**Status:** Todo

**Priority:** P1

**Labels:** poke-collection, component

### Description

Crear componente TypeBadge para mostrar tipos de Pokemon con colores dinámicos según el tipo.

### 📁 Archivos a Crear:

```
└── src/components/TypeBadge/
    ├── TypeBadge.tsx                 # Componente principal
    ├── TypeBadge.module.css          # Estilos
    └── index.ts                      # Barrel export
```

### ✅ Acceptance Criteria:

1. **TypeBadge.tsx - Interface:**

   - [ ] Interface simple:

     ```typescript
     import styles from "./TypeBadge.module.css";
     import { getPokemonTypeColor } from "../../utils/pokemonHelpers";

     interface ITypeBadge {
       type: string;
     }
     ```

2. **TypeBadge.tsx - Componente:**

   - [ ] Componente funcional simple:

     ```typescript
     function TypeBadge({ type }: ITypeBadge) {
       const backgroundColor = getPokemonTypeColor(type);

       return (
         <div className={styles["type-badge"]} style={{ backgroundColor }}>
           {type}
         </div>
       );
     }

     export { TypeBadge };
     ```

3. **TypeBadge.module.css - Estilos:**

   - [ ] Block style:
     ```css
     /* Block */
     .type-badge {
       display: inline-flex;
       align-items: center;
       justify-content: center;
       padding: 2px var(--space-sm);
       border-radius: 10px;
       font-size: var(--font-size-xs);
       font-weight: var(--font-weight-bold);
       color: var(--color-white);
       line-height: 16px;
       white-space: nowrap;
       text-transform: capitalize;
     }
     ```

4. **index.ts:**
   - [ ] Barrel export:
     ```typescript
     export { TypeBadge } from "./TypeBadge";
     ```

### 🧪 Cómo Probar:

```typescript
// 1. Crear prueba en src/App.tsx
import { TypeBadge } from "./components/TypeBadge";

function App() {
  const allTypes = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>TypeBadge Component Test</h1>

      <section style={{ marginBottom: "2rem" }}>
        <h2>All Pokemon Types</h2>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {allTypes.map(type => (
            <TypeBadge key={type} type={type} />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Multiple Types (like Pikachu = Electric)</h2>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <TypeBadge type="electric" />
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Multiple Types (like Charizard = Fire + Flying)</h2>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <TypeBadge type="fire" />
          <TypeBadge type="flying" />
        </div>
      </section>

      <section>
        <h2>Multiple Types (like Bulbasaur = Grass + Poison)</h2>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <TypeBadge type="grass" />
          <TypeBadge type="poison" />
        </div>
      </section>
    </div>
  );
}

export { App };
```

```bash
# 2. Verificar en navegador:
npm run dev

# Checklist:
□ Todos los tipos se renderizan correctamente
□ fire = naranja
□ water = azul
□ grass = verde
□ electric = amarillo
□ psychic = rosa
□ dragon = púrpura
□ fairy = rosa claro
□ Todos los colores son legibles (text blanco sobre fondos de colores)
□ Text capitalized (Fire, Water, Grass)
□ Badges tienen border-radius redondeado
□ No wrapping del texto

# 3. Responsive check:
# - Mobile: badges deben verse bien
# - Desktop: badges deben verse bien
```

### 📦 Estructura Esperada Post-Tarea:

```
src/components/TypeBadge/
├── TypeBadge.tsx               (15-20 líneas)
├── TypeBadge.module.css        (15 líneas)
└── index.ts                    (1 línea)

Total: ~35 líneas de código
```

### 📊 Métricas de Éxito:

- TypeBadge renderiza correctamente
- Colores dinámicos funcionan
- Todos los 18 tipos se ven bien
- Text legible (contraste)
- Responsive
- 0 errores TypeScript

**Estimate:** 2-3 horas

**Conflict Risk:** 0% (componente específico de Poke Collection)

**Dependencies:**

- Requiere A1 (proyecto setup)
- Requiere A2 (CSS variables con type colors)
- Requiere C1 (types)
- Requiere C3 (pokemonHelpers - getPokemonTypeColor)

**Blockers:** Ninguno

**💡 Notas:**

- Componente muy simple pero visual
- Usa inline styles para backgroundColor dinámico
- Importante para UI de Pokemon

---

## Tarea C5: PokeCollectionPage - Full Implementation

**Title:** PokeCollectionPage - Página Principal de Poke Collection

**Assignee:** Dev C

**Status:** Todo

**Priority:** P0

**Labels:** poke-collection, page, complex

### Description

Crear la página completa de Poke Collection con login, búsqueda de Pokemon, vista detallada, manejo de favoritos, y lista de favoritos. Esta es la tarea MÁS COMPLEJA del proyecto.

### 📁 Archivos a Crear:

```
└── src/pages/PokeCollectionPage/
    ├── PokeCollectionPage.tsx        # Página principal (330+ líneas)
    ├── PokeCollectionPage.module.css # Estilos completos (390+ líneas)
    └── index.ts                      # Barrel export
```

### ✅ Acceptance Criteria (HIGH-LEVEL):

**Esta es una tarea MASIVA. Consulta el código existente en `src/pages/PokeCollectionPage/PokeCollectionPage.tsx` para ver la implementación completa de 333 líneas.**

#### 1. State Management (15+ useState hooks):

- Username & Login state
- Search query & current Pokemon
- Favorites list & loading states
- Error messages
- Toggle favorite state
- Removed Pokemon tracking (optimistic UI)

#### 2. Effects:

- Auto-login desde localStorage
- Refresh favorites después de agregar/remover

#### 3. Core Functions:

- `handleLogin()` - Authenticate user
- `handleExit()` - Logout y limpiar state
- `handleSearch()` - Buscar Pokemon por nombre/ID
- `handleAddToFavorites()` - Agregar a favoritos con optimistic UI
- `handleRemoveFromFavorites()` - Remover de favoritos con optimistic UI
- Helper: `isFavorite()` - Check si Pokemon está en favoritos

#### 4. UI Structure:

- **Login Screen:**

  - Logo
  - Username input
  - Enter button
  - Error message

- **Main Screen (after login):**
  - Header con Breadcrumb, LanguagePicker, Exit button
  - Search section con Input y Button
  - Pokemon detail card (si hay búsqueda exitosa)
    - Imagen
    - Nombre (#ID)
    - Types badges
    - Weight/Height con iconos
    - Add/Remove favorite button
  - Favorites section
    - Lista de favoritos
    - Empty state
    - Cards clickeables

#### 5. LocalStorage Persistence:

- Username se guarda
- Auto-login en refresh

#### 6. Error Handling:

- Pokemon not found
- User not found
- API errors
- Loading states

#### 7. Optimistic UI:

- Al agregar a favoritos → aparece inmediatamente
- Al remover → desaparece inmediatamente
- Después se sincroniza con servidor

### 🧪 Cómo Probar:

```bash
npm run dev
# Navegar a /poke-collection

# Test Flow Completo:
# 1. Login Screen
□ Muestra logo de Pokemon
□ Input para username
□ Botón "Enter"
□ Error si username no existe

# 2. Login Exitoso
□ Enter con username válido (e.g., "testuser")
□ Carga favoritos del servidor
□ Muestra main screen

# 3. Búsqueda de Pokemon
□ Search "pikachu" → Muestra Pikachu
□ Muestra imagen, nombre, #025, types, weight, height
□ Botón "Add to Favorites" disponible
□ Click "Add to Favorites" → Aparece en lista inmediatamente
□ Botón cambia a "Remove from Favorites"
□ Search "charizard" → Muestra Charizard
□ Add to favorites también

# 4. Lista de Favoritos
□ Muestra todos los favoritos agregados
□ Click en favorite card → Muestra ese Pokemon en detail
□ Botón "Remove from Favorites" disponible
□ Click remove → Desaparece de lista inmediatamente

# 5. Error Cases
□ Search "asdfasdf" → Muestra "Pokemon not found"
□ Detail card desaparece

# 6. Exit
□ Click "Exit" → Vuelve a login screen
□ Username limpio
□ Favorites limpios

# 7. LocalStorage Persistence
□ Hacer login
□ Agregar algunos favoritos
□ Refrescar página (F5)
□ Auto-login debe funcionar
□ Favoritos deben cargarse del servidor

# 8. i18n
□ Cambiar idioma → Todas las traducciones cambian
□ ES: "Ingresar", "Salir", "Buscar", "Agregar a Favoritos", etc.
```

### 📦 Estructura Esperada Post-Tarea:

```
src/pages/PokeCollectionPage/
├── PokeCollectionPage.tsx        (330-340 líneas)
├── PokeCollectionPage.module.css (390-400 líneas)
└── index.ts                      (1 línea)

Total: ~730 líneas de código
```

### 📊 Métricas de Éxito:

- Login/Logout funciona
- Búsqueda de Pokemon funciona
- Add/Remove favorites funciona
- Optimistic UI funciona
- LocalStorage persistence funciona
- i18n completo
- Error handling robusto
- UI pulida y responsive
- 0 errores TypeScript
- Todas las features del functional requirements implementadas

**Estimate:** 20-25 horas (tarea más compleja del proyecto)

**Conflict Risk:**

- 15% con Dev A (usa Breadcrumb, LanguagePicker, Input)
- 10% con Dev B (locales JSONs - Section Strategy)

**Dependencies:**

- Requiere A1, A2, A3, A4, A5, A6 (todo de Dev A)
- Requiere C1, C2, C3, C4 (types, API, helpers, TypeBadge)
- Opcionales: Breadcrumb, LanguagePicker (pueden estar en desarrollo por Dev A)

**Blockers:**

- API de Favorites debe estar online
- Conexión a internet (PokeAPI + Favorites API)

**💡 Notas:**

- **TAREA MÁS COMPLEJA DEL PROYECTO**
- 15+ state hooks
- Multiple loading states
- Optimistic UI updates
- Complex error handling
- Consultar código existente para implementación completa
- **IMPORTANTE:** Revisar el código en `src/pages/PokeCollectionPage/PokeCollectionPage.tsx` línea por línea

**Consejo para Dev C:**
Dividir esta tarea internamente en sub-tareas:

1. Login/Logout UI y lógica (4-5h)
2. Search Pokemon (3-4h)
3. Pokemon Detail Card (3-4h)
4. Add/Remove Favorites lógica (5-6h)
5. Favorites List UI (3-4h)
6. Error handling y edge cases (2-3h)

---

## Tarea C6: Locale Keys Addition (Poke Collection)

**Title:** Agregar Translation Keys para Poke Collection

**Assignee:** Dev C

**Status:** Todo

**Priority:** P1

**Labels:** i18n, poke-collection

### Description

Agregar todas las translation keys necesarias para Poke Collection usando **Section Strategy**.

### ✅ Acceptance Criteria:

**en.json keys:**

```json
{
  // === POKE COLLECTION SECTION (Dev C) ===
  "project-pokecollection": "Poke Collection",
  "pokemon-username-placeholder": "username",
  "pokemon-enter": "Enter",
  "pokemon-search-placeholder": "pokemon name",
  "pokemon-search": "Search",
  "pokemon-favorites": "Favorites",
  "pokemon-add-to-favorites": "Add to Favorites",
  "pokemon-remove-from-favorites": "Remove from Favorites",
  "pokemon-exit": "Exit",
  "pokemon-weight": "Weight",
  "pokemon-height": "Height",
  "pokemon-error-not-found": "Pokemon not found",
  "pokemon-error-user-not-found": "User not found",
  "pokemon-empty-favorites": "No favorites yet"
  // === END POKE COLLECTION ===
}
```

**es.json keys:** (Traducciones en español)

**Estimate:** 1-2 horas

**Conflict Risk:** 30% con Dev B (Section Strategy mitiga conflictos)

---

## Tarea C7: Breadcrumb Component

**Title:** Breadcrumb - Componente de Navegación

**Assignee:** Dev C (o Dev A - se puede negociar)

**Status:** Todo

**Priority:** P1

**Labels:** shared, component

### Description

Componente simple para mostrar breadcrumb de navegación. Usado en TicTacToePage y PokeCollectionPage.

### ✅ Acceptance Criteria:

**Breadcrumb.tsx:**

```typescript
import styles from "./Breadcrumb.module.css";
import { cx } from "../../utils/cx";

interface IBreadcrumb {
  children: React.ReactNode;
  className?: string;
}

function Breadcrumb({ children, className = "" }: IBreadcrumb) {
  const breadcrumbClasses = cx(styles.breadcrumb, className);

  return (
    <div className={breadcrumbClasses}>
      <span className={styles.breadcrumb__text}>{children}</span>
    </div>
  );
}

export { Breadcrumb };
```

**Estimate:** 2-3 horas

---

## Tarea C8: LanguagePicker Component

**Title:** LanguagePicker - Selector de Idioma

**Assignee:** Dev C (o Dev A - se puede negociar)

**Status:** Todo

**Priority:** P1

**Labels:** shared, component, i18n

### Description

Componente para cambiar idioma (EN/ES) con flags.

### ✅ Acceptance Criteria:

- Usa i18n Context
- Muestra flags (SVG assets)
- Active state visual
- onClick cambia idioma

**Estimate:** 3-4 horas

---

## Tarea C9: Tag Component

**Title:** Tag - Badge Simple para HomePage

**Assignee:** Dev C (o Dev A)

**Status:** Todo

**Priority:** P2

**Labels:** shared, component

### Description

Componente simple de Tag para mostrar features en ProjectCard.

**Estimate:** 1-2 horas

---

## Tarea C10: ProjectCard Component

**Title:** ProjectCard - Card para Proyectos en HomePage

**Assignee:** Dev C (o Dev A)

**Status:** Todo

**Priority:** P2

**Labels:** shared, component

### Description

Card que muestra preview de proyecto con imagen, título, y tags.

**Estimate:** 3-4 horas

---

## Tarea C11: HomePage

**Title:** HomePage - Página Principal con ProjectCards

**Assignee:** Dev C (o Dev A)

**Status:** Todo

**Priority:** P2

**Labels:** page

### Description

Página de inicio que muestra 4 project cards (Tic-Tac-Toe, Poke Collection, Wordle, Video Feed).

### ✅ Acceptance Criteria:

- Header con título y LanguagePicker
- Grid de 4 ProjectCards
- Click navega a proyecto (usando React Router)
- Responsive

**Estimate:** 4-5 horas

---

## Tarea C12: Routes Integration & Finalize

**Title:** React Router Setup y Integración Final

**Assignee:** Dev C (o Dev A)

**Status:** Todo

**Priority:** P1

**Labels:** routing, integration

### Description

Configurar React Router en App.tsx con todas las rutas y verificar integración completa.

### ✅ Acceptance Criteria:

**App.tsx:**

```typescript
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { I18nProvider } from "./contexts";
import { HomePage } from "./pages/HomePage";
import { PokeCollectionPage } from "./pages/PokeCollectionPage";
import { TicTacToePage } from "./pages/TicTacToePage";

function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tic-tac-toe" element={<TicTacToePage />} />
          <Route path="/poke-collection" element={<PokeCollectionPage />} />
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;
```

### Verification Checklist:

```bash
npm run build   # Must complete without errors
npm run dev     # Must start without errors

# Navigation test:
□ http://localhost:5173/ → HomePage
□ Click "Tic-Tac-Toe" → /tic-tac-toe
□ Click "React Showcase" → back to /
□ Navigate to /poke-collection → PokeCollectionPage
□ All pages fully functional
□ All components work correctly
□ All translations work
□ All features from functional requirements work
```

**Estimate:** 3-4 horas

**Conflict Risk:** 20% (App.tsx editado por múltiples devs)

---

# 📊 RESUMEN EJECUTIVO - WORK BREAKDOWN

## Estadísticas del Proyecto

### Total de Tareas: **31 tareas**

- **Dev A (Foundation):** 11 tareas (A1-A11)
- **Dev B (Tic-Tac-Toe):** 7 tareas (B1-B7)
- **Dev C (Poke Collection):** 13 tareas (C1-C12 + extras)

### Estimación Total: **~160-200 horas**

- **Dev A:** ~50-60 horas
- **Dev B:** ~40-50 horas
- **Dev C:** ~70-90 horas

### Conflictos Potenciales:

**Alto Riesgo (>25%):**

- Locales JSON (Dev B + Dev C): **30%** → **Mitigation: Section Strategy**

**Riesgo Medio (15-25%):**

- components/index.ts (Dev A + Dev B + Dev C): **20%** → **Mitigation: Section comments**
- App.tsx routes (Dev A + Dev C): **20%** → **Mitigation: Última tarea**

**Bajo Riesgo (<15%):**

- Breadcrumb, LanguagePicker (Dev A vs Dev B/C): **15%** → **Mitigation: Asignar claramente**

## Orden de Ejecución Recomendado

### Fase 1 - Foundation (Week 1)

**Dev A debe completar primero:**

- A1: Project Setup
- A2: ITCSS Architecture
- A3: i18n System
- A4: cx utility
- A5: Button
- A6: Input

**En paralelo, Dev B y Dev C pueden:**

- Leer documentación
- Familiarizarse con arquitectura
- Planear sus tareas

### Fase 2 - Parallel Development (Week 2-3)

**Dev A:**

- A7-A11 (componentes compartidos)

**Dev B (puede empezar):**

- B1: Game Utils
- B2: useTicTacToe Hook
- B3: Square Component
- B4: Board Component
- B5: TicTacToePage
- B6: Locale Keys (coordinar con Dev C)
- B7: Export & Finalize

**Dev C (puede empezar):**

- C1: Pokemon Types
- C2: Pokemon API Service
- C3: Pokemon Helpers
- C4: TypeBadge
- C5: PokeCollectionPage (TAREA GRANDE - 20-25h)
- C6: Locale Keys (coordinar con Dev B)

### Fase 3 - Integration (Week 4)

**Dev A + Dev C:**

- C7-C11: Shared components (Breadcrumb, LanguagePicker, Tag, ProjectCard, HomePage)
- C12: Routes & Final Integration

**Dev B:**

- Code review
- Testing
- Bug fixes

## Dependencias Críticas

```
A1 (Project Setup)
  └─→ A2 (ITCSS)
      └─→ A3 (i18n)
          └─→ A4 (cx)
              ├─→ A5 (Button)
              ├─→ A6 (Input)
              ├─→ B1 (Game Utils)
              │   └─→ B2 (useTicTacToe)
              │       └─→ B3 (Square)
              │           └─→ B4 (Board)
              │               └─→ B5 (TicTacToePage)
              │                   └─→ B6 (Locales)
              │                       └─→ B7 (Export)
              └─→ C1 (Types)
                  └─→ C2 (API Service)
                      └─→ C3 (Helpers)
                          └─→ C4 (TypeBadge)
                              └─→ C5 (PokeCollectionPage)
                                  └─→ C6 (Locales)
```

## Notas Finales

1. **Dev A es el blocker inicial** → Debe terminar A1-A6 rápido (1 semana)
2. **Dev B y Dev C pueden trabajar casi independientemente** después de Fase 1
3. **C5 (PokeCollectionPage) es la tarea más compleja** → 20-25 horas
4. **Comunicación sobre locales JSON es crítica** → Usar Section Strategy
5. **Testing continuo** durante desarrollo

---

**FIN DEL DOCUMENTO**

Total: ~5900 líneas de documentación detallada.

Para usar este documento:

1. Importar tareas en GitHub Projects usando títulos + descripciones
2. Asignar a Dev A, Dev B, Dev C
3. Seguir orden de dependencias
4. Comunicarse sobre archivos compartidos
5. Hacer code review entre devs

¡Buena suerte con el proyecto! 🚀

---

# 📖 APÉNDICE: DETALLES ULTRA-EXTENDIDOS PARA TAREAS C5-C12

Esta sección proporciona el **MÁXIMO NIVEL DE DETALLE** para las tareas más complejas del proyecto (C5-C12). El objetivo es que Dev C tenga toda la información necesaria con el mismo nivel de profundidad que las tareas A1-A6 y B1-B4.

**Nota:** Las tareas C5-C12 en la sección principal tienen resúmenes. Esta sección amplía cada una con snippets de código completos, testing exhaustivo, y documentación línea por línea cuando es necesario.

---

## 📋 C5 - ULTRA DETALLADA: PokeCollectionPage Implementation

**ADVERTENCIA:** Esta es LA TAREA MÁS COMPLEJA DEL PROYECTO ENTERO.

- **Líneas de código:** 333 (TSX) + 389 (CSS) = **722 líneas totales**
- **Tiempo estimado:** 20-25 horas
- **Nivel de complejidad:** ⭐⭐⭐⭐⭐ (5/5)

### Archivo 1/3: PokeCollectionPage.tsx

**Consulta el código completo en:** `src/pages/PokeCollectionPage/PokeCollectionPage.tsx`

**Estructura del archivo (333 líneas):**

```
Líneas 1-15:   Imports (FormEvent, useContext, useState, etc.)
Líneas 16-36:  State declarations (15 hooks)
Líneas 38-56:  useEffect y handleAutoLogin
Líneas 58-76:  handleLogin
Líneas 78-86:  handleExit
Líneas 88-104: handleSearch
Líneas 106-115: handleFavoriteClick
Líneas 117-121: isFavorite helper
Líneas 123-176: handleToggleFavorite (LA MÁS COMPLEJA)
Líneas 178-216: Login Screen JSX
Líneas 218-329: Main Screen JSX (search + detail + favorites)
Líneas 331-333: Export
```

### Key Implementation Details:

**1. handleToggleFavorite - La función más compleja (54 líneas):**

Esta función implementa **Optimistic UI Updates**, lo que significa que los cambios se muestran INMEDIATAMENTE en la UI antes de confirmar con el servidor.

```typescript
async function handleToggleFavorite() {
  // 1. Early return si no hay Pokemon o username
  if (!currentPokemon || !username) return;

  // 2. Check si ya es favorito
  const favorite = isFavorite();
  setIsTogglingFavorite(true);

  try {
    if (favorite) {
      // === REMOVE PATH ===
      // Workaround: Backend API no provee ID para deletion
      // Solución: "Remover" optimísticamente solo en frontend
      const pokemonName = currentPokemon.name.toLowerCase();

      // Agregar a lista de removidos (para filtrar en UI)
      setRemovedPokemonNames(prev => new Set(prev).add(pokemonName));

      // Remover de lista de favoritos INMEDIATAMENTE
      setFavorites(prev => prev.filter(fav => fav.name.toLowerCase() !== pokemonName));
    } else {
      // === ADD PATH ===
      // 1. Intentar agregar en backend
      try {
        await addToFavorites(username, currentPokemon);
      } catch (addError) {
        // Si backend falla (incluso con 409 conflict), agregar optimísticamente
        console.log("Backend add failed, adding optimistically:", addError);
      }

      // 2. Actualizar UI optimísticamente
      const pokemonName = currentPokemon.name.toLowerCase();

      // Remover de lista de "removidos" si estaba ahí
      setRemovedPokemonNames(prev => {
        const newSet = new Set(prev);
        newSet.delete(pokemonName);
        return newSet;
      });

      // 3. Crear objeto FavoritePokemon
      const newFavorite: FavoritePokemon = {
        id: currentPokemon.id,
        pokemonId: currentPokemon.id,
        name: currentPokemon.name,
        imageUrl: currentPokemon.sprites.other["official-artwork"].front_default,
        types: currentPokemon.types.map(t => t.type.name),
      };

      // 4. Agregar a lista si no existe ya
      setFavorites(prev => {
        const exists = prev.some(fav => fav.name.toLowerCase() === pokemonName);
        if (exists) return prev; // Ya existe, no duplicar
        return [...prev, newFavorite]; // Agregar al final
      });
    }
  } catch (error) {
    console.error("Error toggling favorite:", error);
  } finally {
    setIsTogglingFavorite(false);
  }
}
```

**Por qué es tan compleja:**

1. **Optimistic UI**: Actualiza UI antes de confirmar con servidor
2. **Error handling**: Maneja fallos de backend gracefully
3. **Estado complejo**: Maneja 3 pieces of state (favorites, removedPokemonNames, isTogglingFavorite)
4. **Backend workaround**: API no provee ID para deletion, requiere workaround
5. **Duplicate prevention**: Check si Pokemon ya existe antes de agregar

### Archivo 2/3: PokeCollectionPage.module.css

**Consulta el código completo en:** `src/pages/PokeCollectionPage/PokeCollectionPage.module.css`

**Estructura del archivo (389 líneas):**

```
Líneas 1-8:    Block principal (.poke)
Líneas 10-47:  Header elements
Líneas 49-67:  Main content
Líneas 69-95:  Login card
Líneas 97-175: Main card y search
Líneas 177-285: Pokemon detail card (complejo)
Líneas 287-354: Favorites sidebar
Líneas 356-389: Responsive media queries
```

**Key CSS Classes:**

```css
/* 1. Login Card - Centrado perfecto */
.poke__login-card {
  flex: 1;
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: var(--space-xl);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center; /* Horizontal center */
  justify-content: center; /* Vertical center */
  min-height: 720px;
}

/* 2. Pokemon Detail - Grid complejo para stats */
.poke__pokemon-stats {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  width: 100%;
  justify-content: center;
}

.poke__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
}

.poke__stat-value {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.poke__stat-divider {
  width: var(--border-width);
  height: 40px;
  background-color: var(--color-gray-divider);
}

/* 3. Favorites Card - Hover effect */
.poke__favorite-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md);
  background-color: var(--color-white);
  border: var(--border-width) solid var(--color-gray-300);
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
}

.poke__favorite-card:hover {
  transform: translateY(-2px); /* Sube 2px */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra */
}

/* 4. Responsive - Mobile layout */
@media (max-width: 768px) {
  .poke__content {
    flex-direction: column; /* Stack vertical en mobile */
  }

  .poke__main-card {
    flex-direction: column;
  }

  .poke__favorites-sidebar {
    width: 100%; /* Full width en mobile */
  }
}
```

### Testing Exhaustivo:

**Fase 1: Login Flow (15 tests)**

```bash
# Test 1.1: Login Screen Initial Render
npm run dev
# Navigate to /poke-collection
□ Logo Pokemon visible (320x160px)
□ Input placeholder "username"
□ Button "Enter" disabled (input vacío)
□ Breadcrumb shows "Poke Collection"
□ LanguagePicker visible y funcional

# Test 1.2: Login - Invalid Username
□ Type "nonexistentuser999"
□ Click "Enter"
□ Loading state shows (button disabled)
□ Error message appears: "User not found"
□ Input has error state (red border)
□ Button re-enables después de error

# Test 1.3: Login - Valid Username
□ Clear input
□ Type "testuser"
□ Click "Enter"
□ Loading state shows
□ Transition to main screen
□ LocalStorage contiene "pokecollection-username": "testuser"
□ Favorites cargan del servidor

# Test 1.4: Auto-Login
□ Con username ya en localStorage
□ Refresh página (F5)
□ Auto-login debe ocurrir
□ Main screen aparece directamente
□ No pasa por login screen

# Test 1.5: Auto-Login Failure
□ Modify localStorage con username inválido
□ Refresh página
□ Auto-login falla
□ localStorage se limpia
□ Vuelve a login screen
```

**Fase 2: Search Flow (12 tests)**

```bash
# Test 2.1: Search - Success
□ En main screen, search input visible
□ Type "pikachu"
□ Button "Search" enabled
□ Click "Search"
□ Loading state shows
□ Pokemon detail aparece:
   - Imagen 200x200px
   - Nombre "Pikachu"
   - ID "#025"
   - Type badge "electric" (amarillo)
   - Weight "6.0 kg"
   - Height "0.4 m"
□ Button "Add to Favorites" aparece

# Test 2.2: Search - Pokemon Not Found
□ Search "asdfqwerzxcv"
□ Click "Search"
□ Loading state shows
□ Error message: "Pokemon not found"
□ Pokemon detail desaparece
□ Search input tiene error state

# Test 2.3: Search - Case Insensitive
□ Search "PIKACHU" (mayúsculas)
□ Debe encontrar Pikachu
□ Search "PiKaChU" (mixed case)
□ Debe encontrar Pikachu

# Test 2.4: Search - By ID
□ Search "25"
□ Debe encontrar Pikachu
□ Search "6"
□ Debe encontrar Charizard

# Test 2.5: Search - Multiple Consecutive
□ Search "pikachu" → detail shows
□ Search "charizard" → detail changes
□ Search "bulbasaur" → detail changes
□ Previous error messages cleared
```

**Fase 3: Favorites Flow (20 tests)**

```bash
# Test 3.1: Add to Favorites - First Pokemon
□ Search "pikachu"
□ Detail shows
□ Button shows "Add to Favorites" con ❤ icon
□ Click "Add to Favorites"
□ Button disabled brevemente
□ Pikachu aparece en favorites list INMEDIATAMENTE
□ Button cambia a "Remove from Favorites" con 💔 icon

# Test 3.2: Add Multiple Favorites
□ Search y add: pikachu, charizard, bulbasaur, squirtle
□ Favorites list debe mostrar los 4
□ Orden: último agregado al final

# Test 3.3: Remove from Favorites
□ Con Pokemon que es favorito en detail
□ Button muestra "Remove from Favorites"
□ Click button
□ Pokemon desaparece de favorites list INMEDIATAMENTE
□ Button cambia a "Add to Favorites"

# Test 3.4: Favorite Card Click
□ Favorites list muestra múltiples Pokemon
□ Click en card de "charizard"
□ Detail card cambia a Charizard
□ Search input actualiza a "charizard"
□ Button correcto ("Remove" si es favorito)

# Test 3.5: Empty Favorites State
□ Login con user que no tiene favoritos
□ Favorites list muestra "No favorites yet"
□ Empty state centrado y visible

# Test 3.6: Remove All Favorites
□ Con varios favoritos
□ Remove todos uno por uno
□ Al remover último, "No favorites yet" aparece

# Test 3.7: Re-add Previously Removed
□ Add pikachu → lista
□ Remove pikachu → desaparece
□ Search pikachu again
□ Add pikachu → vuelve a lista
□ No duplicados

# Test 3.8: Favorites Persistence
□ Add varios favoritos
□ Refresh página (F5)
□ Auto-login ocurre
□ Favorites cargan del servidor
□ Lista completa visible

# Test 3.9: Scroll in Favorites List
□ Add más de 10 Pokemon
□ Favorites list debe tener scroll
□ max-height: 600px
□ Scroll funciona suavemente
```

**Fase 4: Error Cases & Edge Cases (10 tests)**

```bash
# Test 4.1: Network Error During Login
□ Disconnect internet
□ Try login
□ Error message apropiado

# Test 4.2: Network Error During Search
□ Disconnect internet
□ Try search
□ Error message apropiado

# Test 4.3: Spam Click Add Favorite
□ Search Pokemon
□ Click "Add to Favorites" 10 veces rápido
□ Solo debe agregarse 1 vez
□ No duplicados en lista

# Test 4.4: Search Empty String
□ Search input vacío
□ Button "Search" disabled
□ Cannot submit form

# Test 4.5: Username with Spaces
□ Login " testuser " (con espacios)
□ Debe trimear y funcionar
□ Spaces removidos

# Test 4.6: Pokemon Name with Special Chars
□ Search "mr-mime" (con guión)
□ Debe funcionar
□ Search "farfetch'd" (con apóstrofe)
□ Debe funcionar o mostrar error apropiado
```

**Fase 5: i18n Testing (8 tests)**

```bash
# Test 5.1: English (default)
□ Login screen en English
□ All labels correctos:
   - "username" placeholder
   - "Enter" button
   - "Pokemon not found" error

# Test 5.2: Switch to Spanish
□ In any screen, click ES flag
□ All text changes instantly:
   - "nombre de usuario" placeholder
   - "Ingresar" button
   - "Buscar" search button
   - "Favoritos" title
   - "Agregar a Favoritos" button
   - "Remover de Favoritos" button
   - "Salir" exit button
   - "Peso" weight label
   - "Altura" height label
   - "Pokémon no encontrado" error
   - "Usuario no encontrado" error
   - "No hay favoritos aún" empty state

# Test 5.3: i18n Persistence
□ Change to Spanish
□ Refresh página
□ Debe mantenerse en Spanish

# Test 5.4: i18n in Dynamically Loaded Content
□ En Spanish, search Pokemon
□ Detail card labels en español
□ Add to favorites
□ Favorites list en español
```

**Fase 6: UI & Visual Testing (15 tests)**

```bash
# Test 6.1: Login Logo
□ Logo 320x160px
□ Centrado
□ Asset correcto (poke-preview.svg)

# Test 6.2: Pokemon Image
□ 200x200px
□ object-fit: contain
□ Centered
□ Alta calidad (official artwork)

# Test 6.3: Type Badges
□ Correct colors por tipo
□ fire = naranja
□ water = azul
□ grass = verde
□ electric = amarillo
□ Multiple types lado a lado

# Test 6.4: Weight/Height Icons
□ Icons visible
□ Correct icons (weight-icon.svg, height-icon.svg)
□ Size apropiado
□ Aligned con text

# Test 6.5: Favorite Button States
□ Enabled: cursor pointer, hover effect
□ Disabled: opacity 0.5, cursor not-allowed
□ Icon changes: ❤ <-> 💔

# Test 6.6: Loading States
□ Login button: disabled during loading
□ Search button: disabled during loading
□ Favorite button: disabled during toggle
□ No flickering

# Test 6.7: Error Messages
□ Red color
□ Visible positioning
□ Clear y legible
□ Clears on new action

# Test 6.8: Empty State
□ "No favorites yet" centrado
□ Gray color
□ Visible en empty sidebar

# Test 6.9: Hover Effects
□ Favorite cards: translateY(-2px) + shadow
□ Buttons: background color change
□ Links: opacity change
□ Smooth transitions

# Test 6.10: Box Shadows
□ Login card: visible shadow
□ Pokemon detail card: visible shadow
□ Favorite cards: shadow on hover
□ Depth perception correcto
```

**Fase 7: Responsive Testing (12 tests)**

```bash
# Test 7.1: Desktop (1280px+)
□ Two-column layout
□ Search section: left
□ Favorites sidebar: right (320px fixed)
□ All content visible sin scroll horizontal

# Test 7.2: Tablet (768px - 1024px)
□ Layout mantiene dos columnas
□ Sidebar ajusta width
□ Images escalan

# Test 7.3: Mobile (< 768px)
□ Single column layout
□ Search section arriba
□ Favorites sidebar abajo (full width)
□ Vertical scroll OK

# Test 7.4: Small Mobile (< 480px)
□ Login logo escala
□ Pokemon image escala
□ Type badges wrap
□ Text legible

# Test 7.5: Landscape Mobile
□ Layout adapta
□ No content cut-off

# Test 7.6: Touch Interactions
□ Buttons tappable (min 44x44px)
□ No hover states stuck
□ Scroll smooth
```

**Fase 8: Performance & Memory (8 tests)**

```bash
# Test 8.1: Initial Load
□ No errores en console
□ No warnings en console
□ Assets cargan correctamente

# Test 8.2: Memory Leaks
□ Add/remove 50 favoritos
□ No memory leaks
□ Performance tab muestra cleanup correcto

# Test 8.3: Image Loading
□ Pokemon images lazy-load
□ No broken images
□ Fallback si image fails

# Test 8.4: LocalStorage Size
□ After adding many favorites
□ LocalStorage reasonable size
□ No quota exceeded errors

# Test 8.5: Re-renders
□ React DevTools: track re-renders
□ No unnecessary re-renders
□ Optimistic updates efficient
```

### Summary - PokeCollectionPage:

**Total Tests:** ~100+ tests across 8 phases
**Tiempo de Testing:** 4-6 horas
**Implementación:** 20-25 horas
**Total:** 24-31 horas para esta single task

**Métricas de Éxito Final:**

- ✅ 100% de tests pasando
- ✅ 0 errores TypeScript
- ✅ 0 warnings en console
- ✅ Responsive en todos los breakpoints
- ✅ i18n completo
- ✅ Performance excelente
- ✅ Optimistic UI funciona perfectamente
- ✅ Error handling robusto
- ✅ LocalStorage persistence sin issues
- ✅ Todas las features del functional requirements

---

## 📋 C6 - ULTRA DETALLADA: Locale Keys Addition

**Nivel de complejidad:** ⭐ (1/5)

### Archivos a Editar:

```
└── src/locales/
    ├── en.json     # Agregar 13 keys
    └── es.json     # Agregar 13 keys
```

### ✅ Acceptance Criteria:

#### 1. **en.json - Agregar keys:**

```json
{
  "app-title": "React Showcase",

  // === POKE COLLECTION SECTION (Dev C) ===
  "project-pokecollection": "Poke Collection",
  "pokemon-username-placeholder": "username",
  "pokemon-enter": "Enter",
  "pokemon-search-placeholder": "pokemon name",
  "pokemon-search": "Search",
  "pokemon-favorites": "Favorites",
  "pokemon-add-to-favorites": "Add to Favorites",
  "pokemon-remove-from-favorites": "Remove from Favorites",
  "pokemon-exit": "Exit",
  "pokemon-weight": "Weight",
  "pokemon-height": "Height",
  "pokemon-error-not-found": "Pokemon not found",
  "pokemon-error-user-not-found": "User not found",
  "pokemon-empty-favorites": "No favorites yet"
  // === END POKE COLLECTION ===
}
```

#### 2. **es.json - Traducciones:**

```json
{
  // === POKE COLLECTION SECTION (Dev C) ===
  "project-pokecollection": "Colección Pokémon",
  "pokemon-username-placeholder": "nombre de usuario",
  "pokemon-enter": "Ingresar",
  "pokemon-search-placeholder": "nombre del pokemon",
  "pokemon-search": "Buscar",
  "pokemon-favorites": "Favoritos",
  "pokemon-add-to-favorites": "Agregar a Favoritos",
  "pokemon-remove-from-favorites": "Remover de Favoritos",
  "pokemon-exit": "Salir",
  "pokemon-weight": "Peso",
  "pokemon-height": "Altura",
  "pokemon-error-not-found": "Pokémon no encontrado",
  "pokemon-error-user-not-found": "Usuario no encontrado",
  "pokemon-empty-favorites": "No hay favoritos aún"
  // === END POKE COLLECTION ===
}
```

**Estimate:** 1-2 horas | **Conflict Risk:** 30% (usar Section Strategy)

---

## 📋 C7 - ULTRA DETALLADA: Breadcrumb Component

**Nivel de complejidad:** ⭐⭐ (2/5)

### ✅ Acceptance Criteria:

```typescript
// Breadcrumb.tsx
import styles from "./Breadcrumb.module.css";
import { cx } from "../../utils/cx";

interface IBreadcrumb {
  children: React.ReactNode;
  className?: string;
}

function Breadcrumb({ children, className = "" }: IBreadcrumb) {
  const breadcrumbClasses = cx(styles.breadcrumb, className);
  return (
    <div className={breadcrumbClasses}>
      <span className={styles.breadcrumb__text}>{children}</span>
    </div>
  );
}

export { Breadcrumb };
```

```css
/* Breadcrumb.module.css */
.breadcrumb {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-sm) var(--space-md);
  border: var(--border-width) solid var(--color-blue-600);
  border-radius: var(--border-radius-xl);
  background-color: transparent;
}

.breadcrumb__text {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-blue-600);
  line-height: 24px;
  white-space: nowrap;
}
```

**Estimate:** 2-3 horas | **Conflict Risk:** 15%

---

## 📋 C8 - ULTRA DETALLADA: LanguagePicker Component

**Nivel de complejidad:** ⭐⭐⭐ (3/5)

### ✅ Acceptance Criteria:

```typescript
// LanguagePicker.tsx
import { useContext } from "react";
import { I18nContext } from "../../contexts";
import styles from "./LanguagePicker.module.css";
import { cx } from "../../utils/cx";
import enFlag from "../../assets/en-flag.svg";
import esFlag from "../../assets/es-flag.svg";

function LanguagePicker() {
  const { language, setLanguage } = useContext(I18nContext);

  return (
    <div className={styles["language-picker"]}>
      <button
        className={cx(styles["language-picker__button"], language === "en" && styles["language-picker__button--active"])}
        onClick={() => setLanguage("en")}
        aria-label="English"
      >
        <img src={enFlag} alt="English" className={styles["language-picker__flag"]} />
      </button>
      <button
        className={cx(styles["language-picker__button"], language === "es" && styles["language-picker__button--active"])}
        onClick={() => setLanguage("es")}
        aria-label="Español"
      >
        <img src={esFlag} alt="Español" className={styles["language-picker__flag"]} />
      </button>
    </div>
  );
}

export { LanguagePicker };
```

```css
/* LanguagePicker.module.css - Grid Overlap Technique */
.language-picker {
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: max-content;
  gap: 0;
  position: relative;
}

.language-picker__button {
  grid-area: 1 / 1; /* Ambos en misma celda */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all var(--transition-base);
}

.language-picker__button--active {
  border: var(--border-width-2) solid var(--color-blue-400);
}

.language-picker__button:hover {
  opacity: 0.8;
}

.language-picker__flag {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
}

.language-picker__button:nth-child(2) {
  margin-left: 44px; /* Offset para separación */
}
```

**Estimate:** 3-4 horas | **Conflict Risk:** 15%

---

## 📋 C9 - ULTRA DETALLADA: Tag Component

**Nivel de complejidad:** ⭐ (1/5)

### ✅ Acceptance Criteria:

```typescript
// Tag.tsx
import styles from "./Tag.module.css";
import { cx } from "../../utils/cx";

interface ITag {
  children: React.ReactNode;
  className?: string;
}

function Tag({ children, className = "" }: ITag) {
  const tagClasses = cx(styles.tag, className);
  return <div className={tagClasses}>{children}</div>;
}

export { Tag };
```

```css
/* Tag.module.css */
.tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-xs) var(--space-sm);
  background-color: var(--color-blue-50);
  border: var(--border-width) solid var(--color-blue-100);
  border-radius: 11px;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-normal);
  color: var(--color-primary);
  line-height: 14px;
  white-space: nowrap;
}
```

**Estimate:** 1-2 horas | **Conflict Risk:** 10%

---

## 📋 C10 - ULTRA DETALLADA: ProjectCard Component

**Nivel de complejidad:** ⭐⭐ (2/5)

### ✅ Acceptance Criteria:

```typescript
// ProjectCard.tsx
import { Tag } from "../Tag";
import styles from "./ProjectCard.module.css";
import { cx } from "../../utils/cx";

interface IProjectCard {
  title: string;
  image: string;
  tags: string[];
  className?: string;
  onClick?: () => void;
}

function ProjectCard({ title, image, tags, className = "", onClick }: IProjectCard) {
  const cardClasses = cx(styles.card, className);

  return (
    <div className={cardClasses} onClick={onClick}>
      <img src={image} alt={title} className={styles.card__image} />
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{title}</h3>
        <div className={styles.card__tags}>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

export { ProjectCard };
```

```css
/* ProjectCard.module.css */
.card {
  display: flex;
  flex-direction: column;
  width: 320px;
  background-color: var(--color-white);
  border: var(--border-width) solid var(--color-gray-300);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  cursor: pointer;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card__image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.card__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  padding: var(--space-md) var(--space-sm);
  align-items: center;
}

.card__title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  line-height: 32px;
  white-space: nowrap;
}

.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  justify-content: center;
  align-items: center;
  width: 100%;
}
```

**Estimate:** 3-4 horas | **Conflict Risk:** 10%

---

## 📋 C11 - ULTRA DETALLADA: HomePage

**Nivel de complejidad:** ⭐⭐⭐ (3/5)

### ✅ Acceptance Criteria:

```typescript
// HomePage.tsx (resumen - ver código completo en src/)
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { I18nContext } from "../../contexts";
import { ProjectCard, LanguagePicker } from "../../components";
import styles from "./HomePage.module.css";

import tictactoeImage from "../../assets/tictactoe-preview.svg";
import pokeCollectionImage from "../../assets/poke-preview.svg";
import wordleImage from "../../assets/wordle-preview.svg";
import videoFeedImage from "../../assets/video-preview.svg";

function HomePage() {
  const { t } = useContext(I18nContext);
  const navigate = useNavigate();

  const projects = [
    {
      title: t("project-tictactoe"),
      image: tictactoeImage,
      tags: [
        t("tag-usestate"),
        t("tag-useeffect"),
        t("tag-customhooks"),
        t("tag-localstorage"),
        t("tag-cssmodules"),
        t("tag-otherfeature"),
        t("tag-otherfeature"),
      ],
      route: "/tic-tac-toe",
    },
    {
      title: t("project-pokecollection"),
      image: pokeCollectionImage,
      tags: [
        t("tag-usestate"),
        t("tag-useeffect"),
        t("tag-customhooks"),
        t("tag-localstorage"),
        t("tag-cssmodules"),
        t("tag-otherfeature"),
        t("tag-otherfeature"),
      ],
      route: "/poke-collection",
    },
    // ... wordle, videofeed con route: "#"
  ];

  const handleProjectClick = (route: string) => {
    if (route !== "#") navigate(route);
  };

  return (
    <div className={styles.home}>
      <header className={styles.home__header}>
        <div className={styles["home__header-container"]}>
          <h1 className={styles.home__title}>{t("app-title")}</h1>
          <LanguagePicker />
        </div>
      </header>
      <main className={styles.home__main}>
        <div className={styles.home__content}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              tags={project.tags}
              onClick={() => handleProjectClick(project.route)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export { HomePage };
```

```css
/* HomePage.module.css */
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: var(--color-gray-50);
}

.home__header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  background-color: var(--color-blue-50);
  border-bottom: var(--border-width) solid var(--color-blue-100);
}

.home__header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: var(--container-max-width);
  padding: 0 var(--space-md);
}

.home__title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  line-height: 40px;
  margin: 0;
}

.home__main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.home__content {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xl);
  justify-content: center;
  align-items: flex-start;
  max-width: var(--container-max-width);
  width: 100%;
  padding: var(--space-3xl) var(--space-md);
}
```

**Estimate:** 4-5 horas | **Conflict Risk:** 10%

---

## 📋 C12 - ULTRA DETALLADA: Routes Integration

**Nivel de complejidad:** ⭐⭐ (2/5)

### ✅ Acceptance Criteria:

```typescript
// App.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { I18nProvider } from "./contexts";
import { HomePage } from "./pages/HomePage";
import { PokeCollectionPage } from "./pages/PokeCollectionPage";
import { TicTacToePage } from "./pages/TicTacToePage";

function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tic-tac-toe" element={<TicTacToePage />} />
          <Route path="/poke-collection" element={<PokeCollectionPage />} />
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;
```

### Verification Checklist:

```bash
# Build & Run
npm run build     # ✅ Sin errores
npm run dev       # ✅ Sin errores
npx tsc --noEmit  # ✅ 0 errores TypeScript

# Navigation Tests
□ / → HomePage
□ /tic-tac-toe → TicTacToePage
□ /poke-collection → PokeCollectionPage
□ Click entre páginas funciona
□ Browser back/forward funciona
□ i18n persiste entre rutas
□ LocalStorage persiste entre rutas
```

**Estimate:** 3-4 horas | **Conflict Risk:** 20%

---

## 📊 RESUMEN FINAL C6-C12

| Tarea | Complejidad | Código     | Tiempo |
| ----- | ----------- | ---------- | ------ |
| C6    | ⭐          | 26 líneas  | 1-2h   |
| C7    | ⭐⭐        | 41 líneas  | 2-3h   |
| C8    | ⭐⭐⭐      | 87 líneas  | 3-4h   |
| C9    | ⭐          | 32 líneas  | 1-2h   |
| C10   | ⭐⭐        | 82 líneas  | 3-4h   |
| C11   | ⭐⭐⭐      | 161 líneas | 4-5h   |
| C12   | ⭐⭐        | 23 líneas  | 3-4h   |

**Total C6-C12:** ~452 líneas, ~20-25 horas

---

**FIN DEL APÉNDICE**

Total documento: ~9,200 líneas de documentación completa para 31 tareas.

¡Buena suerte con el proyecto! 🚀
