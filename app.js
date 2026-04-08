const defaultRecords = [
    { id: crypto.randomUUID(), plataforma: "Netflix", correo: "plataformas01@protonmail.com", clave: "Falconaño2026*", perfil: "Perfil 1", pais: "USA", cliente: "Waldo", pin: "1027", monto: "15 USD", diaCobro: "1", whatsapp: "18303868323", estatus: "activo" },
    { id: crypto.randomUUID(), plataforma: "Netflix", correo: "plataformas01@protonmail.com", clave: "Falconaño2026*", perfil: "Perfil 2", pais: "España", cliente: "Leo", pin: "2026", monto: "16 USDT", diaCobro: "7", whatsapp: "34604820794", estatus: "activo" },
    { id: crypto.randomUUID(), plataforma: "Netflix", correo: "plataformas01@protonmail.com", clave: "Falconaño2026*", perfil: "Perfil 3", pais: "Peru", cliente: "FRANCYS", pin: "1412", monto: "11 Soles", diaCobro: "1", whatsapp: "51936896428", estatus: "activo" },
    { id: crypto.randomUUID(), plataforma: "Netflix", correo: "plataformas01@protonmail.com", clave: "Falconaño2026*", perfil: "Perfil 4", pais: "-", cliente: "Disponible", pin: "1617", monto: "6 USD", diaCobro: "-", whatsapp: "-", estatus: "En espera" },
    { id: crypto.randomUUID(), plataforma: "Prime Video", correo: "primevideo043@todopremiumypro.com", clave: "prime2107!", perfil: "Perfil 1", pais: "Venezuela", cliente: "DIEGO 2 PANT", pin: "1617", monto: "6 USD", diaCobro: "10", whatsapp: "584246261131", estatus: "activo" },
    { id: crypto.randomUUID(), plataforma: "Prime Video", correo: "primevideo043@todopremiumypro.com", clave: "prime2107!", perfil: "Perfil 2", pais: "Peru", cliente: "FRANCYS", pin: "1008", monto: "11 Soles", diaCobro: "1", whatsapp: "51936896428", estatus: "activo" },
    { id: crypto.randomUUID(), plataforma: "Prime Video", correo: "primevideo043@todopremiumypro.com", clave: "prime2107!", perfil: "Perfil 3", pais: "USA", cliente: "WALDO", pin: "1412", monto: "15 USD", diaCobro: "1", whatsapp: "18303868323", estatus: "activo" },
    { id: crypto.randomUUID(), plataforma: "Disney Plus", correo: "timdis48386@streamglas.org", clave: "Trdoci251209", perfil: "PERFIL 1", pais: "Peru", cliente: "JOSEP", pin: "3105", monto: "15 Soles", diaCobro: "2", whatsapp: "51901518745", estatus: "activo" },
    { id: crypto.randomUUID(), plataforma: "Disney Plus", correo: "timdis48386@streamglas.org", clave: "Trdoci251209", perfil: "PERFIL 2", pais: "Venezuela", cliente: "DIEGO 2 PANT", pin: "1008", monto: "6 USD", diaCobro: "10", whatsapp: "584246261131", estatus: "activo" },
    { id: crypto.randomUUID(), plataforma: "Disney Plus", correo: "timdis48386@streamglas.org", clave: "Trdoci251209", perfil: "PERFIL 3", pais: "Venezuela", cliente: "LUIS YANNES", pin: "906", monto: "6 USD", diaCobro: "19", whatsapp: "584246261131", estatus: "activo" },
    { id: crypto.randomUUID(), plataforma: "Disney Plus", correo: "timdis48386@streamglas.org", clave: "Trdoci251209", perfil: "PERFIL 4", pais: "Venezuela", cliente: "LUIS / Roger", pin: "604", monto: "6 USD", diaCobro: "19", whatsapp: "584246261131", estatus: "activo" },
    { id: crypto.randomUUID(), plataforma: "Disney Plus", correo: "timdis48386@streamglas.org", clave: "Trdoci251209", perfil: "PERFIL 5", pais: "Peru", cliente: "FRANCYS", pin: "1412", monto: "11 Soles", diaCobro: "1", whatsapp: "51936896428", estatus: "activo" },
    { id: crypto.randomUUID(), plataforma: "Disney Plus", correo: "timdis48386@streamglas.org", clave: "Trdoci251209", perfil: "PERFIL 6", pais: "USA", cliente: "WALDO", pin: "1027", monto: "15 USD", diaCobro: "1", whatsapp: "18303868323", estatus: "activo" },
    { id: crypto.randomUUID(), plataforma: "HBO MAX", correo: "mpomo2502@streamglas.com", clave: "Ceceoc260213", perfil: "Perfi 1", pais: "Peru", cliente: "FRANCYS", pin: "1412", monto: "11 Soles", diaCobro: "1", whatsapp: "51936896428", estatus: "activo" },
    { id: crypto.randomUUID(), plataforma: "HBO MAX", correo: "mpomo2502@streamglas.com", clave: "Ceceoc260213", perfil: "Perfil 2", pais: "Peru", cliente: "JOSEP", pin: "3105", monto: "15 Soles", diaCobro: "2", whatsapp: "51901518745", estatus: "activo" },
    { id: crypto.randomUUID(), plataforma: "HBO MAX", correo: "mpomo2502@streamglas.com", clave: "Ceceoc260213", perfil: "Perfil 3", pais: "Venezuela", cliente: "DIEGO 2 PANT", pin: "1008", monto: "6 USD", diaCobro: "10", whatsapp: "584246261131", estatus: "activo" },
    { id: crypto.randomUUID(), plataforma: "HBO MAX", correo: "mpomo2502@streamglas.com", clave: "Ceceoc260213", perfil: "Perfil 4", pais: "USA", cliente: "WALDO", pin: "1027", monto: "15 USD", diaCobro: "1", whatsapp: "18303868323", estatus: "activo" },
    { id: crypto.randomUUID(), plataforma: "Apple Tv Plus", correo: "atplute@streamglas.com", clave: "Cecuce262307", perfil: "Perfi 1", pais: "Peru", cliente: "FRANCYS", pin: "1412", monto: "11 Soles", diaCobro: "1", whatsapp: "51936896428", estatus: "activo" },
    { id: crypto.randomUUID(), plataforma: "Apple Tv Plus", correo: "atplute@streamglas.com", clave: "Cecuce262307", perfil: "Perfil 2", pais: "Peru", cliente: "JOSEP", pin: "3105", monto: "15 Soles", diaCobro: "2", whatsapp: "51901518745", estatus: "activo" },
    { id: crypto.randomUUID(), plataforma: "Apple Tv Plus", correo: "atplute@streamglas.com", clave: "Cecuce262307", perfil: "Perfil 3", pais: "-", cliente: "Disponible", pin: "1617", monto: "6 USD", diaCobro: "-", whatsapp: "-", estatus: "En espera" },
    { id: crypto.randomUUID(), plataforma: "Apple Tv Plus", correo: "atplute@streamglas.com", clave: "Cecuce262307", perfil: "Perfil 4", pais: "-", cliente: "Disponible", pin: "1617", monto: "6 USD", diaCobro: "-", whatsapp: "-", estatus: "En espera" },
    { id: crypto.randomUUID(), plataforma: "Apple Tv Plus", correo: "atplute@streamglas.com", clave: "Cecuce262307", perfil: "Perfil 5", pais: "-", cliente: "Disponible", pin: "1617", monto: "6 USD", diaCobro: "-", whatsapp: "-", estatus: "En espera" },
    { id: crypto.randomUUID(), plataforma: "Apple Tv Plus", correo: "atplute@streamglas.com", clave: "Cecuce262307", perfil: "Perfil 6", pais: "-", cliente: "Disponible", pin: "1617", monto: "6 USD", diaCobro: "-", whatsapp: "-", estatus: "En espera" }
];

const STORAGE_KEY = 'streamAdminProRecords';
const SEED_KEY = 'streamAdminProSeeded';

// ==========================================
// INTEGRACIÓN CON GOOGLE SHEETS
// ==========================================
// 1. Pega aquí el enlace de tu Google Apps Script (Web App URL)
// 2. Si lo dejas vacío (""), el panel seguirá usando solo el almacenamiento local.
const GOOGLE_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzkZJuHdnFbOJhN9E8IAlFnifONkfP2dUTfxzTYX8XK3DWXGHbNydWRDxnguogXJrywkA/exec";

let records = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

if (!localStorage.getItem(SEED_KEY)) {
    // Inject the default records right away for first usage
    records = defaultRecords;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    localStorage.setItem(SEED_KEY, 'true');
}

// Función genérica para notificaciones
function showToast(msg, type = 'success') {
    const toast = document.createElement('div');
    toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-check' : 'fa-info-circle'}" style="margin-right:8px;"></i>${msg}`;
    Object.assign(toast.style, {
        position: 'fixed', bottom: '20px', right: '20px',
        background: type === 'success' ? 'var(--success)' : 'var(--accent)', 
        color: '#fff', padding: '12px 22px',
        borderRadius: '10px', zIndex: '5000', fontSize: '14px',
        fontWeight: '600', boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        transition: 'opacity 0.4s', opacity: '1'
    });
    document.body.appendChild(toast);
    setTimeout(() => toast.style.opacity = '0', 2000);
    setTimeout(() => toast.remove(), 2500);
}

// Función para guardar tanto en local como en la nube (Google Sheets)
function saveLocalAndCloud() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    if (GOOGLE_WEB_APP_URL) {
        // Sincronizar y retornar la promesa
        return fetch(GOOGLE_WEB_APP_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: "sync", records: records })
        }).catch(e => {
            console.error("Error sincronizando con Google Sheets:", e);
            throw e;
        });
    }
    return Promise.resolve();
}

// Función para descargar datos de Google Sheets al iniciar
async function syncFromGoogle() {
    if (!GOOGLE_WEB_APP_URL) return;
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 12000); // 12 seconds timeout

        // Añadir un parámetro de tiempo para evitar caché y siempre traer datos frescos desde el GSheet
        const urlToFetch = GOOGLE_WEB_APP_URL + "?t=" + Date.now();
        const res = await fetch(urlToFetch, { signal: controller.signal, cache: 'no-store' });
        clearTimeout(timeoutId);

        if (!res.ok) throw new Error("HTTP " + res.status);

        const data = await res.json();
        if (data && Array.isArray(data)) {
            // Asegurarnos de que todos los registros tengan un ID único
            records = data.map(r => {
                if (!r.id) r.id = crypto.randomUUID();
                return r;
            });
            localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
        }
    } catch (e) {
        console.error("Error cargando desde Google Sheets:", e);
        // Si hay error, mostrarlo unos segundos y continuar con lo local
        tableBody.innerHTML = `<tr><td colspan="14" style="text-align:center; padding: 40px; color: var(--warn);">Error de red: no se pudo sincronizar (${e.message}). Cargando datos locales...</td></tr>`;
        await new Promise(r => setTimeout(r, 2000));
    }
}

// Full-color SVG / PNG icons for reliability and better aesthetics
const platformLogoMapping = {
    'Netflix': 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    'Prime Video': 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png',
    'Disney Plus': 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg',
    'HBO MAX': 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Max_logo.svg',
    'Apple Tv Plus': 'https://upload.wikimedia.org/wikipedia/commons/2/28/Apple_TV_Plus_Logo.svg',
    'Spotify': 'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg',
    'YouTube Premium': 'https://upload.wikimedia.org/wikipedia/commons/d/dd/YouTube_Premium_logo.svg',
    'Otra': 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Play_arrow_icon.svg'
};

const platformUrlMapping = {
    'Netflix': 'https://www.netflix.com/browse',
    'Prime Video': 'https://www.primevideo.com/profiles/ref=atv_profile_redirect_pid_locked?switchRurl=%2Fstorefront',
    'Disney Plus': 'https://www.disneyplus.com/select-profile',
    'HBO MAX': 'https://play.hbomax.com/',
    'Apple Tv Plus': 'https://tv.apple.com/',
    'Spotify': 'https://open.spotify.com/',
    'YouTube Premium': 'https://www.youtube.com/',
    'Otra': '#'
};

// DOM Elements
const tableBody = document.getElementById('table-body');
const searchInput = document.getElementById('search-input');
const modalForm = document.getElementById('modal-form');
const btnAddNew = document.getElementById('btn-add-new');
const btnCloseModal = document.getElementById('btn-close-modal');
const btnCancel = document.getElementById('btn-cancel');
const recordForm = document.getElementById('record-form');
const modalTitle = document.getElementById('modal-title');
const totalAccountsEl = document.getElementById('total-accounts');
const totalAvailableEl = document.getElementById('total-available');
const totalClientsEl = document.getElementById('total-clients');
const btnTools = document.getElementById('btn-tools');
const toolsMenu = document.getElementById('tools-menu');
const btnSortPago = document.getElementById('btn-sort-pago');
const btnExportExcel = document.getElementById('btn-export-excel');
const btnConfig = document.getElementById('btn-config');
const modalConfig = document.getElementById('modal-config');
const btnCloseConfig = document.getElementById('btn-close-config');
const btnCancelConfig = document.getElementById('btn-cancel-config');
const btnForcePush = document.getElementById('btn-force-push');
const btnForcePull = document.getElementById('btn-force-pull');

// Form Inputs
const inputId = document.getElementById('record-id');
const inputPlataforma = document.getElementById('plataforma');
const inputCorreo = document.getElementById('correo');
const inputClave = document.getElementById('clave');
const inputPerfil = document.getElementById('perfil');
const inputPais = document.getElementById('pais');
const inputCliente = document.getElementById('cliente');
const inputPin = document.getElementById('pin');
const inputMonto = document.getElementById('monto');
const inputDiaCobro = document.getElementById('diaCobro');
const inputWhatsapp = document.getElementById('whatsapp');
const inputEstatus = document.getElementById('estatus');

let sortPagoActive = false;

function updatePaymentStatuses() {
    const today = new Date();
    const currentMonth = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0');
    const currentDay = today.getDate();
    let changed = false;

    records.forEach(r => {
        // Inicializar si no tiene mes registrado
        if (!r.pagoMonth) {
            r.pagoMonth = currentMonth;
            r.pagoStatus = 'no-pagado';
            changed = true;
        }

        // Extraer los primeros 7 caracteres para prevenir conversiones caprichosas de Excel (YYYY-MM...)
        const recordMonth = String(r.pagoMonth).substring(0, 7);

        // Resetear al nuevo mes (El día 1 a las 12am se ponen todos en azul automáticamente)
        if (recordMonth !== currentMonth) {
            r.pagoMonth = currentMonth;
            r.pagoStatus = 'no-pagado'; // Vuelve a azul para todo el mundo
            changed = true;
        }

        // Reparar pagoStatus inválido o undefined (dato corrupto)
        if (!['no-pagado', 'ya-pago', 'paso-dia'].includes(r.pagoStatus)) {
            r.pagoStatus = 'no-pagado';
            changed = true;
        }

        if (r.pagoStatus === 'no-pagado') {
            const dia = parseInt(r.diaCobro);
            if (!isNaN(dia) && currentDay > dia) {
                r.pagoStatus = 'paso-dia';
                changed = true;
            }
        }
    });

    if (changed) {
        saveLocalAndCloud();
    }
}

// Initialize
async function init() {
    if (GOOGLE_WEB_APP_URL) {
        // Mostrar mensaje de carga si estamos buscando de internet
        tableBody.innerHTML = '<tr><td colspan="14" style="text-align:center; padding: 40px; color: var(--text-muted);">Sincronizando con Google Sheets... <i class="fa-solid fa-circle-notch fa-spin"></i></td></tr>';
        await syncFromGoogle();
    }

    updatePaymentStatuses();
    renderTable();
    updateStats();
    setupEventListeners();
}

function getPlatformLogoUrl(platformName) {
    return platformLogoMapping[platformName] || platformLogoMapping['Otra'];
}

function getPlatformUrl(platformName) {
    return platformUrlMapping[platformName] || '#';
}

let currentFilterData = 'Todos';

// Render logic
function renderTable(filterText = searchInput.value) {
    tableBody.innerHTML = '';

    const filtered = records.filter(record => {
        const textToSearch = `${record.cliente || ''} ${record.plataforma || ''} ${record.correo || ''}`.toLowerCase();
        const matchesText = textToSearch.includes(filterText.toLowerCase());

        let matchesButton = true;
        if (currentFilterData === 'En espera') {
            const estadoStr = String(record.estatus || '').toLowerCase().trim();
            matchesButton = (estadoStr !== 'activo');
        } else if (currentFilterData !== 'Todos') {
            matchesButton = (record.plataforma === currentFilterData);
        }

        return matchesText && matchesButton;
    });

    // Siempre ordenar por plataforma (base permanente)
    filtered.sort((a, b) => String(a.plataforma || '').localeCompare(String(b.plataforma || '')));

    if (sortPagoActive) {
        const order = { 'ya-pago': 1, 'paso-dia': 2, 'no-pagado': 3 };
        filtered.sort((a, b) => {
            const valA = order[a.pagoStatus || 'no-pagado'] || 3;
            const valB = order[b.pagoStatus || 'no-pagado'] || 3;
            // Si el estado de pago es igual, agrupar por plataforma
            if (valA === valB) return String(a.plataforma || '').localeCompare(String(b.plataforma || ''));
            return valA - valB;
        });
    }

    if (filtered.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding: 40px; color: var(--text-muted);">No se encontraron resultados</td></tr>`;
        return;
    }

    filtered.forEach((record, index) => {
        const tr = document.createElement('tr');
        tr.style.animationDelay = `${index * 0.05}s`;
        tr.className = 'new-row';

        tr.innerHTML = `
            <td>
                <div class="platform-cell">
                    <a href="${getPlatformUrl(record.plataforma)}" target="_blank" style="text-decoration: none; color: inherit; display: flex; align-items: center; gap: 8px;" title="Abrir ${record.plataforma}">
                        <img src="${getPlatformLogoUrl(record.plataforma)}" alt="${record.plataforma} logo" class="platform-logo" style="cursor: pointer;">
                        <span style="cursor: pointer; transition: color 0.2s;">${record.plataforma}</span>
                    </a>
                </div>
            </td>
            <td class="col-detalles"><span class="copyable" data-copy="${encodeURIComponent(record.correo)}" title="Copiar">${record.correo}</span></td>
            <td class="col-detalles"><span class="copyable" data-copy="${encodeURIComponent(record.clave)}" title="Copiar">${record.clave}</span></td>
            <td class="col-detalles">${record.perfil || '-'}</td>
            <td class="col-detalles">${record.pais || '-'}</td>
            <td>${record.cliente}</td>
            <td>${record.pin || '-'}</td>
            <td style="color: var(--success); font-weight: 600;">${record.monto || '-'}</td>
            <td>${record.diaCobro !== undefined ? record.diaCobro : '-'}</td>
            <td>
                ${(record.whatsapp && String(record.whatsapp) !== '-') ? `<a href="https://wa.me/${String(record.whatsapp).replace(/\D/g, '')}" target="_blank" style="color: #25D366; text-decoration: none;"><i class="fa-brands fa-whatsapp"></i> ${record.whatsapp}</a>` : '-'}
            </td>
            <td>
                <span class="badge badge-pago ${record.pagoStatus === 'ya-pago' ? 'badge-pago-green' : (record.pagoStatus === 'paso-dia' ? 'badge-pago-red' : 'badge-pago-blue')}" data-record-id="${record.id}">
                    ${record.pagoStatus === 'ya-pago' ? 'Ya Pagó' : (record.pagoStatus === 'paso-dia' ? 'Pasó el Día' : 'No ha Pagado')}
                </span>
            </td>
            <td>
                <span class="badge badge-estado ${String(record.estatus || '').toLowerCase().trim() === 'activo' ? 'badge-activo' : 'badge-espera'}" data-record-id="${record.id}" style="cursor: pointer;" title="Haz clic para cambiar estado">
                    ${String(record.estatus || '').toLowerCase().trim() === 'activo' ? 'Activo' : 'DISPONIBLE'}
                </span>
            </td>
            <td class="col-copy">
                <button class="btn-copy-row" onclick="copyRowData('${record.id}')" title="Copiar información de esta fila">
                    <i class="fa-solid fa-copy"></i> Copiar
                </button>
            </td>
            <td>
                <div style="display: flex; gap: 8px;">
                    <button class="btn-icon-edit" onclick="editRecord('${record.id}')" title="Editar"><i class="fa-solid fa-pen"></i></button>
                    <button class="btn-icon-delete" onclick="deleteRecord('${record.id}')" title="Eliminar"><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

function parseMonto(montoStr) {
    if (!montoStr || montoStr === '-') return { value: 0, currency: null };
    const str = montoStr.toString().toLowerCase().trim();
    const value = parseFloat(str.replace(/[^0-9.]/g, ''));
    if (isNaN(value)) return { value: 0, currency: null };

    if (str.includes('usd') || str.includes('usdt') || str.includes('$')) {
        return { value, currency: 'USD' };
    } else if (str.includes('sol') || str.includes('soles') || str.includes('s/')) {
        return { value, currency: 'PEN' };
    }
    return { value: 0, currency: null };
}

function updateStats() {
    totalAccountsEl.textContent = records.length;

    const availableCount = records.filter(r => {
        const estadoStr = String(r.estatus || '').toLowerCase().trim();
        return estadoStr !== 'activo';
    }).length;
    if (totalAvailableEl) totalAvailableEl.textContent = availableCount;

    // Unique clients
    const clients = new Set(records.map(r => r.cliente.toLowerCase().trim()));
    totalClientsEl.textContent = clients.size;

    // Calculate Costs (Unique accounts per platform, defined by 'correo')
    const platformAccounts = {};
    records.forEach(r => {
        const key = `${r.plataforma}-${r.correo}`;
        platformAccounts[key] = { plataforma: r.plataforma };
    });

    let costUSD = 0;
    let costPEN = 0;

    Object.values(platformAccounts).forEach(acc => {
        if (acc.plataforma === 'Netflix') costUSD += 8;
        if (acc.plataforma === 'Prime Video') costUSD += 2;
        if (acc.plataforma === 'Disney Plus') costPEN += 22;
        if (acc.plataforma === 'HBO MAX') costPEN += 14;
        if (acc.plataforma === 'Apple Tv Plus') costPEN += 8;
    });

    // Calculate Revenue
    let revenueUSD = 0;
    let revenuePEN = 0;
    let waitUSD = 0;
    let waitPEN = 0;

    records.forEach(r => {
        const parsed = parseMonto(r.monto);
        const estadoStr = String(r.estatus || '').toLowerCase().trim();

        if (estadoStr === 'activo') {
            if (parsed.currency === 'USD') revenueUSD += parsed.value;
            if (parsed.currency === 'PEN') revenuePEN += parsed.value;
        } else {
            if (parsed.currency === 'USD') waitUSD += parsed.value;
            if (parsed.currency === 'PEN') waitPEN += parsed.value;
        }
    });

    const profitUSD = revenueUSD - costUSD;
    const profitPEN = revenuePEN - costPEN;

    // Output to UI
    document.getElementById('profit-usd').textContent = `$${profitUSD.toFixed(2)}`;
    document.getElementById('details-usd').textContent = `Ingresos: $${revenueUSD.toFixed(2)} | Gastos: $${costUSD.toFixed(2)}`;
    document.getElementById('potencial-usd').textContent = `DISPONIBLE: $${waitUSD.toFixed(2)}`;

    document.getElementById('profit-soles').textContent = `S/ ${profitPEN.toFixed(2)}`;
    document.getElementById('details-soles').textContent = `Ingresos: S/${revenuePEN.toFixed(2)} | Gastos: S/${costPEN.toFixed(2)}`;
    document.getElementById('potencial-soles').textContent = `DISPONIBLE: S/${waitPEN.toFixed(2)}`;
}

// Global scope copy function
window.copyToClipboard = function (text) {
    navigator.clipboard.writeText(text).then(() => {
        // Simple notification
        const toast = document.createElement('div');
        toast.textContent = 'Copiado!';
        Object.assign(toast.style, {
            position: 'fixed', bottom: '20px', right: '20px',
            background: 'var(--success)', color: '#fff', padding: '10px 20px',
            borderRadius: '8px', zIndex: '1000', transition: 'all 0.3s'
        });
        document.body.appendChild(toast);
        setTimeout(() => toast.style.opacity = '0', 2000);
        setTimeout(() => toast.remove(), 2500);
    });
}

// Copy full row data to clipboard
window.copyRowData = function (id) {
    const r = records.find(x => x.id === id);
    if (!r) return;
    const pago = r.pagoStatus === 'ya-pago' ? 'Ya Pagó' : (r.pagoStatus === 'paso-dia' ? 'Pasó el Día' : 'No ha Pagado');
    const estado = r.estatus === 'activo' ? 'Activo' : 'DISPONIBLE';
    const text =
        `Plataforma: ${r.plataforma || '-'}\n` +
        `Correo: ${r.correo || '-'}\n` +
        `Clave: ${r.clave || '-'}\n` +
        `Perfil: ${r.perfil || '-'}\n` +
        `País: ${r.pais || '-'}\n` +
        `Cliente: ${r.cliente || '-'}\n` +
        `PIN: ${r.pin || '-'}\n` +
        `Monto: ${r.monto || '-'}\n` +
        `Día Cobro: ${r.diaCobro || '-'}\n` +
        `WhatsApp: ${r.whatsapp || '-'}\n` +
        `Pago: ${pago}\n` +
        `Estado: ${estado}`;
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.createElement('div');
        toast.innerHTML = '<i class="fa-solid fa-check" style="margin-right:6px;"></i>Fila copiada!';
        Object.assign(toast.style, {
            position: 'fixed', bottom: '20px', right: '20px',
            background: 'var(--success)', color: '#fff', padding: '12px 22px',
            borderRadius: '10px', zIndex: '1000', fontSize: '14px',
            fontWeight: '600', boxShadow: '0 4px 20px rgba(16,185,129,0.4)',
            transition: 'opacity 0.4s', opacity: '1'
        });
        document.body.appendChild(toast);
        setTimeout(() => toast.style.opacity = '0', 2000);
        setTimeout(() => toast.remove(), 2500);
    });
}

function setupEventListeners() {
    btnAddNew.addEventListener('click', () => {
        openModal();
    });

    btnExportExcel.addEventListener('click', () => {
        openExportModal();
    });

    // Listeners del modal de exportación
    document.getElementById('btn-close-export').addEventListener('click', closeExportModal);
    document.getElementById('btn-cancel-export').addEventListener('click', closeExportModal);
    document.getElementById('btn-download-csv').addEventListener('click', () => {
        exportToCsv();
        closeExportModal();
    });
    document.getElementById('btn-open-sheets').addEventListener('click', () => {
        exportToGoogleSheets();
    });

    // Delegación de eventos para badge-pago y badge-estado
    tableBody.addEventListener('click', (e) => {
        const badge = e.target.closest('.badge-pago');
        if (badge && badge.dataset.recordId) {
            togglePago(badge.dataset.recordId);
        }

        const badgeEstado = e.target.closest('.badge-estado');
        if (badgeEstado && badgeEstado.dataset.recordId) {
            toggleEstado(badgeEstado.dataset.recordId);
        }

        const copyable = e.target.closest('.copyable');
        if (copyable && copyable.dataset.copy) {
            copyToClipboard(decodeURIComponent(copyable.dataset.copy));
        }
    });

    btnSortPago.addEventListener('click', () => {
        sortPagoActive = !sortPagoActive;
        const dataTable = document.getElementById('data-table');
        if (sortPagoActive) {
            btnSortPago.classList.replace('btn-secondary', 'btn-primary');
            dataTable.classList.add('table-pago-mode');
        } else {
            btnSortPago.classList.replace('btn-primary', 'btn-secondary');
            dataTable.classList.remove('table-pago-mode');
        }
        renderTable();
    });

    btnTools.addEventListener('click', (e) => {
        e.stopPropagation();
        toolsMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!toolsMenu.contains(e.target) && !btnTools.contains(e.target)) {
            toolsMenu.classList.remove('active');
        }
    });

    btnCloseModal.addEventListener('click', closeModal);
    btnCancel.addEventListener('click', closeModal);

    recordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveRecord();
    });

    searchInput.addEventListener('input', (e) => {
        renderTable(e.target.value);
    });

    // Filter Buttons logic
    const filterButtons = document.querySelectorAll('.btn-filter');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            currentFilterData = e.currentTarget.getAttribute('data-filter');
            renderTable();
        });
    });

    // Eventos del modal de configuración
    btnConfig.addEventListener('click', () => {
        modalConfig.style.display = 'flex';
        setTimeout(() => modalConfig.classList.add('active'), 10);
    });

    const closeConfig = () => {
        modalConfig.classList.remove('active');
        setTimeout(() => modalConfig.style.display = 'none', 300);
    };

    btnCloseConfig.addEventListener('click', closeConfig);
    btnCancelConfig.addEventListener('click', closeConfig);

    btnForcePush.addEventListener('click', async () => {
        btnForcePush.disabled = true;
        btnForcePush.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sincronizando...';
        
        try {
            await saveLocalAndCloud();
            showToast('¡Datos enviados a la nube con éxito!');
        } catch (e) {
            showToast('Error al sincronizar datos', 'info');
        } finally {
            btnForcePush.disabled = false;
            btnForcePush.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i> ENVIAR A LA NUBE (PC -> NUBE)';
        }
    });

    btnForcePull.addEventListener('click', async () => {
        btnForcePull.disabled = true;
        btnForcePull.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Cargando...';
        
        try {
            await syncFromGoogle();
            renderTable();
            updateStats();
            showToast('¡Actualizaciones cargadas desde la nube!');
        } catch (e) {
            showToast('Error al cargar actualizaciones', 'info');
        } finally {
            btnForcePull.disabled = false;
            btnForcePull.innerHTML = '<i class="fa-solid fa-cloud-arrow-down"></i> CARGAR ACTUALIZACIONES (NUBE -> PC)';
        }
    });
}

function openModal(editingRecord = null) {
    if (editingRecord) {
        modalTitle.textContent = 'Editar Registro';
        inputId.value = editingRecord.id;
        inputPlataforma.value = editingRecord.plataforma;
        inputCorreo.value = editingRecord.correo;
        inputClave.value = editingRecord.clave;
        inputPerfil.value = editingRecord.perfil;
        inputPais.value = editingRecord.pais;
        inputCliente.value = editingRecord.cliente;
        inputPin.value = editingRecord.pin;
        inputMonto.value = editingRecord.monto;
        inputDiaCobro.value = editingRecord.diaCobro;
        inputWhatsapp.value = editingRecord.whatsapp;
        inputEstatus.value = editingRecord.estatus || 'activo';
    } else {
        modalTitle.textContent = 'Agregar Registro';
        recordForm.reset();
        inputId.value = '';
    }

    // Force active class for CSS transition
    modalForm.style.display = 'flex';
    // tiny delay to allow display flex to apply before opacity changes
    setTimeout(() => {
        modalForm.classList.add('active');
    }, 10);
}

function closeModal() {
    modalForm.classList.remove('active');
    setTimeout(() => {
        modalForm.style.display = 'none';
        recordForm.reset();
    }, 300); // Matches CSS transition duration
}

function saveRecord() {
    const today = new Date();
    const currentMonth = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0');

    if (inputId.value) {
        // Editar existente: preservar pagoStatus y pagoMonth originales
        const index = records.findIndex(r => r.id === inputId.value);
        if (index > -1) {
            const existing = records[index];
            records[index] = {
                id: existing.id,
                plataforma: inputPlataforma.value,
                correo: inputCorreo.value,
                clave: inputClave.value,
                perfil: inputPerfil.value,
                pais: inputPais.value,
                cliente: inputCliente.value,
                pin: inputPin.value,
                monto: inputMonto.value,
                diaCobro: inputDiaCobro.value,
                whatsapp: inputWhatsapp.value,
                estatus: inputEstatus.value,
                // Preservar estado de pago existente
                pagoStatus: existing.pagoStatus || 'no-pagado',
                pagoMonth: existing.pagoMonth || currentMonth
            };
        }
    } else {
        // Nuevo registro: inicializar con valores de pago por defecto
        records.push({
            id: crypto.randomUUID(),
            plataforma: inputPlataforma.value,
            correo: inputCorreo.value,
            clave: inputClave.value,
            perfil: inputPerfil.value,
            pais: inputPais.value,
            cliente: inputCliente.value,
            pin: inputPin.value,
            monto: inputMonto.value,
            diaCobro: inputDiaCobro.value,
            whatsapp: inputWhatsapp.value,
            estatus: inputEstatus.value,
            pagoStatus: 'no-pagado',
            pagoMonth: currentMonth
        });
    }

    saveLocalAndCloud();
    closeModal();
    renderTable();
    updateStats();
}

// Global functions for inline HTML event handlers
window.editRecord = function (id) {
    const record = records.find(r => r.id === id);
    if (record) {
        openModal(record);
    }
}

window.deleteRecord = function (id) {
    if (confirm('¿Estás seguro de que deseas eliminar este registro?')) {
        records = records.filter(r => r.id !== id);
        saveLocalAndCloud();
        renderTable(searchInput.value);
        updateStats();
    }
}

window.togglePago = function (id) {
    const r = records.find(x => x.id === id);
    if (!r) return;

    // Normalizar cualquier valor inválido o undefined antes de ciclar
    if (!['no-pagado', 'ya-pago', 'paso-dia'].includes(r.pagoStatus)) {
        r.pagoStatus = 'no-pagado';
    }

    // Ciclo: no-pagado -> ya-pago (verde) -> paso-dia (rojo) -> no-pagado (azul)
    if (r.pagoStatus === 'no-pagado') r.pagoStatus = 'ya-pago';
    else if (r.pagoStatus === 'ya-pago') r.pagoStatus = 'paso-dia';
    else if (r.pagoStatus === 'paso-dia') r.pagoStatus = 'no-pagado';

    // Actualizar mes para que no se auto-resetee este mes
    const today = new Date();
    r.pagoMonth = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0');

    saveLocalAndCloud();
    renderTable(searchInput.value);
}

// Toggle Estado Activo / Disponible
window.toggleEstado = function (id) {
    const r = records.find(x => x.id === id);
    if (!r) return;

    const estadoStr = String(r.estatus || '').toLowerCase();

    // Si era activo, pasa a Disponible. Si era cualquier otra cosa, pasa a Activo.
    if (estadoStr === 'activo') {
        r.estatus = 'En espera';
    } else {
        r.estatus = 'activo';
    }

    saveLocalAndCloud();
    renderTable(searchInput.value);
    updateStats();
}

function buildExportData() {
    const headers = ['Plataforma', 'Correo', 'Clave', 'Perfil', 'País', 'Cliente', 'PIN', 'Monto', 'Día Cobro', 'WhatsApp', 'Pago', 'Estado'];
    const rows = records.map(r => {
        const pago = r.pagoStatus === 'ya-pago' ? 'Ya Pagó' : (r.pagoStatus === 'paso-dia' ? 'Pasó el Día' : 'No ha Pagado');
        const estado = r.estatus === 'activo' ? 'Activo' : 'DISPONIBLE';
        return [
            r.plataforma || '',
            r.correo || '',
            r.clave || '',
            r.perfil || '',
            r.pais || '',
            r.cliente || '',
            r.pin || '',
            r.monto || '',
            r.diaCobro || '',
            (r.whatsapp && r.whatsapp !== '-') ? r.whatsapp : '',
            pago,
            estado
        ];
    });
    return { headers, rows };
}

function openExportModal() {
    document.getElementById('export-count').textContent = records.length;
    document.getElementById('sheets-instructions').style.display = 'none';
    const modal = document.getElementById('modal-export');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeExportModal() {
    const modal = document.getElementById('modal-export');
    modal.classList.remove('active');
    setTimeout(() => { modal.style.display = 'none'; }, 300);
}

function exportToCsv() {
    const { headers, rows } = buildExportData();
    // Usar tabulación como separador: Excel lo reconoce perfecto en cualquier idioma/región
    const escape = (val) => {
        const s = String(val);
        // Si tiene tabulaciones o comillas, envolver en comillas dobles
        if (s.includes('\t') || s.includes('"') || s.includes('\n')) {
            return '"' + s.replace(/"/g, '""') + '"';
        }
        return s;
    };
    let content = "\uFEFF"; // BOM UTF-8 para Excel
    content += headers.map(escape).join('\t') + '\n';
    rows.forEach(row => {
        content += row.map(escape).join('\t') + '\n';
    });
    const blob = new Blob([content], { type: 'text/tab-separated-values;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'reporte_panel_completo.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function exportToGoogleSheets() {
    const { headers, rows } = buildExportData();
    // Construir TSV para pegar en Google Sheets
    let tsv = headers.join('\t') + '\n';
    rows.forEach(row => {
        tsv += row.map(v => String(v).replace(/\t/g, ' ')).join('\t') + '\n';
    });
    // Copiar al portapapeles
    navigator.clipboard.writeText(tsv).then(() => {
        // Mostrar instrucciones
        document.getElementById('sheets-instructions').style.display = 'block';
        // Abrir Google Sheets en nueva pestaña
        window.open('https://sheets.new', '_blank');
    }).catch(() => {
        // Fallback si clipboard no funciona
        window.open('https://sheets.new', '_blank');
        alert('Abre Google Sheets y ve a Archivo > Importar para subir el archivo CSV descargado.');
    });
}

// Run app
init();
