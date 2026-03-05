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

let records = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

if (!localStorage.getItem(SEED_KEY)) {
    // Inject the default records right away for first usage
    records = defaultRecords;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    localStorage.setItem(SEED_KEY, 'true');
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
const totalClientsEl = document.getElementById('total-clients');
const btnTools = document.getElementById('btn-tools');
const toolsMenu = document.getElementById('tools-menu');
const btnSortPago = document.getElementById('btn-sort-pago');
const btnExportExcel = document.getElementById('btn-export-excel');

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

        // Resetear al nuevo mes
        if (r.pagoMonth !== currentMonth) {
            r.pagoMonth = currentMonth;
            r.pagoStatus = 'no-pagado';
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
        localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    }
}

// Initialize
function init() {
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
        const textToSearch = `${record.cliente} ${record.plataforma} ${record.correo}`.toLowerCase();
        const matchesText = textToSearch.includes(filterText.toLowerCase());

        let matchesButton = true;
        if (currentFilterData === 'En espera') {
            matchesButton = (record.estatus === 'En espera' || record.estatus === 'en espera' || record.estatus === 'espera');
        } else if (currentFilterData !== 'Todos') {
            matchesButton = (record.plataforma === currentFilterData);
        }

        return matchesText && matchesButton;
    });

    // Siempre ordenar por plataforma (base permanente)
    filtered.sort((a, b) => a.plataforma.localeCompare(b.plataforma));

    if (sortPagoActive) {
        const order = { 'ya-pago': 1, 'paso-dia': 2, 'no-pagado': 3 };
        filtered.sort((a, b) => {
            const valA = order[a.pagoStatus || 'no-pagado'] || 3;
            const valB = order[b.pagoStatus || 'no-pagado'] || 3;
            // Si el estado de pago es igual, agrupar por plataforma
            if (valA === valB) return a.plataforma.localeCompare(b.plataforma);
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
            <td>${record.diaCobro || '-'}</td>
            <td>
                ${(record.whatsapp && record.whatsapp !== '-') ? `<a href="https://wa.me/${record.whatsapp.replace(/\D/g, '')}" target="_blank" style="color: #25D366; text-decoration: none;"><i class="fa-brands fa-whatsapp"></i> ${record.whatsapp}</a>` : '-'}
            </td>
            <td>
                <span class="badge badge-pago ${record.pagoStatus === 'ya-pago' ? 'badge-pago-green' : (record.pagoStatus === 'paso-dia' ? 'badge-pago-red' : 'badge-pago-blue')}" data-record-id="${record.id}">
                    ${record.pagoStatus === 'ya-pago' ? 'Ya Pagó' : (record.pagoStatus === 'paso-dia' ? 'Pasó el Día' : 'No ha Pagado')}
                </span>
            </td>
            <td>
                <span class="badge ${record.estatus === 'activo' ? 'badge-activo' : 'badge-espera'}">
                    ${record.estatus === 'activo' ? 'Activo' : 'DISPONIBLE'}
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
    });

    // Calculate Revenue
    let revenueUSD = 0;
    let revenuePEN = 0;
    let waitUSD = 0;
    let waitPEN = 0;

    records.forEach(r => {
        const parsed = parseMonto(r.monto);
        if (r.estatus === 'activo') {
            if (parsed.currency === 'USD') revenueUSD += parsed.value;
            if (parsed.currency === 'PEN') revenuePEN += parsed.value;
        } else if (r.estatus === 'En espera' || r.estatus === 'en espera' || r.estatus === 'espera') {
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

    // Delegación de eventos para badge-pago (funciona para filas actuales y futuras)
    tableBody.addEventListener('click', (e) => {
        const badge = e.target.closest('.badge-pago');
        if (badge && badge.dataset.recordId) {
            togglePago(badge.dataset.recordId);
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

    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
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
        localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
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

    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    renderTable(searchInput.value);
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
