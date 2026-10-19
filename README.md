# SIGES · Prototipo interno en TypeScript

Datos completamente ficticios. Sin conexión a Drive, envíos de mensajes ni pagos reales.

## Ejecutar

Requiere Node.js 24 o superior. No necesita instalar dependencias.

```powershell
npm run build
npm start
```

Abrir http://127.0.0.1:4173. Para probar sin servidor, abrir el archivo autónomo dist/siges-demo.html generado dentro del proyecto. La persistencia con archivos locales depende del navegador.

## Probar

1. En Resumen, abrir Los Aromos. El preliminar tiene una diferencia ficticia de $45.000.
2. Como Equipo técnico, corregir el importe recibido a $4.275.000, guardar y registrar conformidad. Se simula una corrección recibida de la empresa: no modificar documentos reales sin recibir su nueva versión.
3. Registrar recepción del oficial emitido por empresa y su verificación. Descargar el borrador de informe.
4. Cambiar a Contadora, aceptar el pago y probar la edición de presupuesto.
5. Cambiar a Administración, confirmar devengamiento y registrar pago. Ambos controles son necesarios y pueden registrarse en cualquier orden después de verificar el oficial.
6. En Cooperativas, completar el pago mensual o las revisiones de renovación; registrar el pase correspondiente.

## Alcance

El selector de rol es una simulación, no autenticación ni autorización segura. En producción se requieren usuarios autenticados, autorización en servidor y permisos efectivos de solo lectura sobre Drive para el equipo; únicamente la contadora debe poder editar su información. El historial y las gestiones se guardan en localStorage, por navegador, sin sincronización entre personas.

Los documentos descargables son ejemplos de texto sin firmas ni validez oficial. El cálculo es exclusivamente ilustrativo: base × porcentaje del período menos deducción ficticia de 5%; no representa normativa tributaria. El porcentaje debe definirse según el proceso real antes de implementar. La verificación del oficial se confirma manualmente en esta demo, sin análisis automático de archivos.

El circuito mensual de cooperativas termina en el pase a Guille según las anotaciones; no se lo marca como pago realizado.

## Archivos

- app.ts: interfaz, datos tipados y comportamiento.
- style.css: estilos adaptables a móvil.
- build.mjs: elimina los tipos con la API nativa de Node y genera dist. No realiza comprobación estática de tipos.
- server.mjs: servidor local de archivos estáticos.

La tipografía remota es opcional; existe una fuente de respaldo del sistema.

## Identidad y apariencia

Logo SIGES provisto por el usuario. Selector claro/oscuro con preferencia guardada en el navegador.
