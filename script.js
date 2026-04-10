const editor = grapesjs.init({
  container: '#gjs',
  height: '100%',
  storageManager: { type: 'local' },
  plugins: ['gjs-preset-webpage'],
  showDevices: true,
  devices: [
    { id: 'Desktop', name: 'Desktop', width: '' },
    { id: 'Tablet', name: 'Tablet', width: '768px' },
    { id: 'Mobile', name: 'Mobile', width: '375px' }
  ],
  blockManager: { appendTo: '.panel__blocks-holder' },
  deviceManager: { appendTo: '.panel__device-holder' },
  styleManager: { appendTo: '#styles-container' },
  layerManager: { appendTo: '#layers-container' },
  traitManager: { appendTo: '#traits-container' },
  selectorManager: { appendTo: '#styles-container' },
  panels: { defaults: [] }
});

const deviceHolder = document.querySelector('.panel__device-holder');
if (deviceHolder && editor.DeviceManager) {
  deviceHolder.appendChild(editor.DeviceManager.render());
}

const bm = editor.BlockManager;

/* ---------------------------
   CUSTOM BLOCKS
----------------------------*/
// Basic Blocks
bm.add('btn', { label: 'Button', category: 'Basic', content: '<button style="padding:10px 20px;background:#00d8ff;border:none;color:white;border-radius:4px;">Click Me</button>' });
bm.add('text', { label: 'Text', category: 'Basic', content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>' });
bm.add('link', { label: 'Link', category: 'Basic', content: '<a href="#" style="color:#00d8ff;">Click here</a>' });
bm.add('video', { label: 'Video', category: 'Basic', content: { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', style: { 'max-width': '100%', height: 'auto' }, attributes: { controls: true, preload: 'metadata' } } });
bm.add('map', { label: 'Map', category: 'Basic', content: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1560216270844!5m2!1sen!2sus" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>' });

// Layout Blocks
bm.add('card', { label: 'Card', category: 'Layout', content: '<div style="padding:20px;border:1px solid #ddd;border-radius:8px;"><h3>Card Title</h3><p>Some quick example text.</p><button>Action</button></div>' });
bm.add('media-text', { label: 'Image + Text', category: 'Layout', content: '<div style="display:flex;gap:20px;"><img src="https://via.placeholder.com/150"/><div><h3>Title</h3><p>Description here</p></div></div>' });

// Section Blocks
bm.add('hero', { label: 'Hero Section', category: 'Sections', content: '<section style="padding:60px;text-align:center;background:#f4f4f4;"><h1>Hero Title</h1><p>Subheading text goes here</p><button>Get Started</button></section>' });
bm.add('navbar', { label: 'Navbar', category: 'Sections', content: '<nav style="display:flex;justify-content:space-between;padding:10px;background:#222;color:white;"><div>Logo</div><div><a style="margin-right:10px;color:white;">Home</a><a style="margin-right:10px;color:white;">About</a><a style="color:white;">Contact</a></div></nav>' });
bm.add('divider', { label: 'Divider', category: 'Sections', content: '<hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">' });
bm.add('divider-3-7', { label: '3/7 Divider', category: 'Sections', content: '<div style="display:flex;gap:20px;"><div style="flex:3;padding:20px;border:1px solid #ddd;">Column 1 (3/7)</div><div style="flex:7;padding:20px;border:1px solid #ddd;">Column 2 (7/7)</div></div>' });
bm.add('section-1-2', { label: '1/2 Section', category: 'Sections', content: '<div style="display:flex;gap:20px;"><div style="flex:1;padding:20px;border:1px solid #ddd;">Column 1</div><div style="flex:1;padding:20px;border:1px solid #ddd;">Column 2</div></div>' });
bm.add('section-1-3', { label: '1/3 Section', category: 'Sections', content: '<div style="display:flex;gap:20px;"><div style="flex:1;padding:20px;border:1px solid #ddd;">Column 1</div><div style="flex:1;padding:20px;border:1px solid #ddd;">Column 2</div><div style="flex:1;padding:20px;border:1px solid #ddd;">Column 3</div></div>' });

// Form
bm.add('form', { label: 'Form', category: 'Forms', content: '<form style="padding:20px;border:1px solid #ddd;border-radius:8px;"><h3>Contact Form</h3><div style="margin-bottom:15px;"><label>Name:</label><input type="text" name="name" style="width:100%;padding:8px;margin-top:5px;border:1px solid #ccc;border-radius:4px;"></div><div style="margin-bottom:15px;"><label>Email:</label><input type="email" name="email" style="width:100%;padding:8px;margin-top:5px;border:1px solid #ccc;border-radius:4px;"></div><button type="submit" style="padding:10px 20px;background:#00d8ff;border:none;color:white;border-radius:4px;cursor:pointer;">Submit</button></form>' });

// Input
bm.add('input', { label: 'Input', category: 'Forms', content: '<input type="text" placeholder="Enter text..." style="width:100%;padding:8px;border:1px solid #ccc;border-radius:4px;">' });

// Textarea
bm.add('textarea', { label: 'Textarea', category: 'Forms', content: '<textarea placeholder="Enter your message..." rows="4" style="width:100%;padding:8px;border:1px solid #ccc;border-radius:4px;resize:vertical;"></textarea>' });

// Select
bm.add('select', { label: 'Select', category: 'Forms', content: '<select style="width:100%;padding:8px;border:1px solid #ccc;border-radius:4px;"><option value="">Choose an option</option><option value="option1">Option 1</option><option value="option2">Option 2</option><option value="option3">Option 3</option></select>' });

// Form Button
bm.add('form-button', { label: 'Button', category: 'Forms', content: '<button type="button" style="padding:10px 20px;background:#00d8ff;border:none;color:white;border-radius:4px;cursor:pointer;">Button</button>' });

// Label
bm.add('label', { label: 'Label', category: 'Forms', content: '<label style="display:block;margin-bottom:5px;font-weight:bold;">Label Text</label>' });

// Checkbox
bm.add('checkbox', { label: 'Checkbox', category: 'Forms', content: '<div style="display:flex;align-items:center;gap:8px;"><input type="checkbox" id="checkbox1" style="margin:0;"><label for="checkbox1">Checkbox option</label></div>' });

// Radio
bm.add('radio', { label: 'Radio', category: 'Forms', content: '<div><div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;"><input type="radio" id="radio1" name="radio-group" style="margin:0;"><label for="radio1">Option 1</label></div><div style="display:flex;align-items:center;gap:8px;"><input type="radio" id="radio2" name="radio-group" style="margin:0;"><label for="radio2">Option 2</label></div></div>' });

// Countdown
bm.add('countdown', {
  label: 'Countdown',
  category: 'Extra',
  content: `
    <div style="text-align:center;padding:20px;border:1px solid #ddd;border-radius:8px;">
      <h3>Countdown Timer</h3>
      <div id="countdown-timer" style="font-size:24px;font-weight:bold;color:#00d8ff;margin:20px 0;">
        <span id="days">00</span>:<span id="hours">00</span>:<span id="minutes">00</span>:<span id="seconds">00</span>
      </div>
      <p>Days : Hours : Minutes : Seconds</p>
    </div>`
});

// Tabs
bm.add('tabs', {
  label: 'Tabs',
  category: 'Extra',
  content: `
    <div class="tabs-container" style="border:1px solid #ddd;border-radius:8px;overflow:hidden;">
      <div class="tab-buttons" style="display:flex;background:#f5f5f5;">
        <button class="tab-btn active" onclick="switchTabContent(event, 'tab1')" style="flex:1;padding:12px;border:none;background:#00d8ff;color:white;cursor:pointer;">Tab 1</button>
        <button class="tab-btn" onclick="switchTabContent(event, 'tab2')" style="flex:1;padding:12px;border:none;background:#ddd;color:#333;cursor:pointer;">Tab 2</button>
        <button class="tab-btn" onclick="switchTabContent(event, 'tab3')" style="flex:1;padding:12px;border:none;background:#ddd;color:#333;cursor:pointer;">Tab 3</button>
      </div>
      <div id="tab1" class="tab-content" style="padding:20px;display:block;">Content for Tab 1</div>
      <div id="tab2" class="tab-content" style="padding:20px;display:none;">Content for Tab 2</div>
      <div id="tab3" class="tab-content" style="padding:20px;display:none;">Content for Tab 3</div>
    </div>`
});

// Custom Code
bm.add('custom-code', {
  label: 'Custom Code',
  category: 'Extra',
  content: `
    <div style="padding:20px;border:1px solid #ddd;border-radius:8px;background:#f9f9f9;">
      <h4 style="margin:0 0 10px 0;">Custom Code Block</h4>
      <pre style="background:#fff;padding:10px;border:1px solid #ccc;border-radius:4px;margin:0;overflow-x:auto;"><code>// Add your custom JavaScript or HTML here
console.log('Hello World!');</code></pre>
    </div>`
});

// Tooltip
bm.add('tooltip', {
  label: 'Tooltip',
  category: 'Extra',
  content: `
    <div style="position:relative;display:inline-block;padding:10px;border:1px solid #ddd;border-radius:4px;background:#f0f0f0;cursor:pointer;">
      Hover me for tooltip
      <span style="visibility:hidden;position:absolute;bottom:125%;left:50%;transform:translateX(-50%);background:#333;color:white;padding:8px;border-radius:4px;white-space:nowrap;z-index:1000;opacity:0;transition:opacity 0.3s;" class="tooltip-text">This is a tooltip!</span>
    </div>`
});

// Typed
bm.add('typed', {
  label: 'Typed Text',
  category: 'Extra',
  content: `
    <div style="padding:20px;border:1px solid #ddd;border-radius:8px;">
      <h3>Typed Text Animation</h3>
      <div id="typed-text" style="font-size:18px;font-family:monospace;border:1px solid #ccc;padding:10px;min-height:30px;background:#f9f9f9;">
        <span id="typed-cursor" style="border-right:2px solid #000;animation:blink 1s infinite;">|</span>
      </div>
      <p style="margin-top:10px;color:#666;">Text will be typed here...</p>
    </div>`
});

/* ---------------------------
   PANELS
----------------------------*/
editor.Panels.addPanel({
  id: 'devices',
  el: '.panel__devices',
  buttons: [
    { id: 'desktop', label: 'Desktop', command: e => e.setDevice('Desktop'), active: true },
    { id: 'tablet', label: 'Tablet', command: e => e.setDevice('Tablet') },
    { id: 'mobile', label: 'Mobile', command: e => e.setDevice('Mobile') }
  ]
});

editor.Panels.addPanel({
  id: 'actions',
  el: '.panel__basic-actions',
  buttons: [
    { id: 'undo', label: '↩️', command: 'core:undo' },
    { id: 'redo', label: '↪️', command: 'core:redo' },
    { id: 'preview', label: '👁‍🗨', command: 'preview' },
    { id: 'code', label: 'Code', command: 'export-template' },
    { id: 'export', label: 'Export ▼', command: editor => {
      const panel = document.querySelector('.panel__basic-actions');
      let menu = panel.querySelector('.export-menu');
      if (!menu) {
        menu = document.createElement('div');
        menu.className = 'export-menu';

        [['HTML', 'export-html'], ['CSS', 'export-css'], ['JS', 'export-js']].forEach(([label, cmd]) => {
          const item = document.createElement('button');
          item.type = 'button';
          item.textContent = label;
          item.onclick = e => {
            e.stopPropagation();
            editor.runCommand(cmd);
            menu.style.display = 'none';
          };
          menu.appendChild(item);
        });

        panel.appendChild(menu);
      }
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    } },
    { id: 'clear', label: '🗑️', command: editor => editor.DomComponents.clear() }
  ]
});

/* ---------------------------
   PREVIEW MODE FIX
----------------------------*/
const togglePanels = (show) => {
  const display = show ? '' : 'none';
  const panels = ['.panel__top', '.panel__left', '.panel__right'];
  
  panels.forEach(selector => {
    const el = document.querySelector(selector);
    if (el) el.style.display = display;
  });

  // Recalculate canvas size
  editor.refresh();
};

// Listen for the built-in preview events
editor.on('run:preview', () => togglePanels(false));
editor.on('stop:preview', () => togglePanels(true));

/* ---------------------------
   FORMATTING UTILITIES
----------------------------*/

// Format HTML with proper indentation
function formatHTML(html) {
  let formatted = '';
  let indent = 0;
  const tags = html.match(/<\/?[^>]+(>|$)/g) || [];
  const texts = html.split(/<\/?[^>]+(>|$)/);
  
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    const text = (texts[i] || '').trim();
    
    if (tag.startsWith('</')) {
      indent = Math.max(0, indent - 1);
    }
    
    if (text) {
      formatted += '  '.repeat(indent) + text + '\n';
    }
    
    formatted += '  '.repeat(indent) + tag + '\n';
    
    if (!tag.startsWith('</') && !tag.endsWith('/>') && !['br', 'hr', 'img', 'input', 'link', 'meta'].some(t => tag.includes(`<${t}`))) {
      if (!tag.startsWith('</')) indent++;
    }
  }
  
  return formatted.trim();
}

// Format CSS with proper spacing
function formatCSS(css) {
  return css
    .replace(/\s*{\s*/g, ' {\n  ')
    .replace(/;\s*/g, ';\n  ')
    .replace(/\s*}\s*/g, '\n}\n\n')
    .replace(/\n\s*\n/g, '\n')
    .trim();
}

// Format JavaScript with proper spacing
function formatJS(js) {
  if (!js || js.trim() === '') return '// No JavaScript generated';
  return js
    .replace(/;\s*/g, ';\n')
    .replace(/\{\s*/g, ' {\n  ')
    .replace(/\}\s*/g, '\n}\n')
    .replace(/\n\s+\n/g, '\n')
    .trim();
}

/* ---------------------------
   EXPORT COMMANDS
----------------------------*/

// Preview code command
editor.Commands.add('preview-code', {
  run: function(editor) {
    const html = formatHTML(editor.getHtml());
    const css = formatCSS(editor.getCss());
    const js = formatJS(editor.getJs ? editor.getJs() : '');
    
    const codeWindow = window.open('', '_blank');
    codeWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Code Preview</title>
        <style>
          body { font-family: monospace; margin: 20px; }
          .code-section { margin-bottom: 30px; }
          .code-section h3 { color: #333; border-bottom: 2px solid #00d8ff; padding-bottom: 5px; }
          pre { background: #f5f5f5; padding: 15px; border-radius: 5px; overflow-x: auto; }
        </style>
      </head>
      <body>
        <h2>Generated Code</h2>
        <div class="code-section">
          <h3>HTML</h3>
          <pre>${html.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
        </div>
        <div class="code-section">
          <h3>CSS</h3>
          <pre>${css}</pre>
        </div>
        <div class="code-section">
          <h3>JavaScript</h3>
          <pre>${js}</pre>
        </div>
      </body>
      </html>
    `);
    codeWindow.document.close();
  }
});

// Export HTML command
editor.Commands.add('export-html', {
  run: function(editor) {
    const html = formatHTML(editor.getHtml());
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'exported-page.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
});

// Export CSS command
editor.Commands.add('export-css', {
  run: function(editor) {
    const css = formatCSS(editor.getCss());
    const blob = new Blob([css], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'styles.css';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
});

// Export JS command
editor.Commands.add('export-js', {
  run: function(editor) {
    const js = formatJS(editor.getJs ? editor.getJs() : '');
    const blob = new Blob([js], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'script.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
});

/* ---------------------------
   TAB SWITCH FIX
----------------------------*/
window.switchTab = function(e, tabName) {
  ['styles','traits','layers'].forEach(c => {
    document.getElementById(c+'-container').classList.add('hidden');
  });
  document.getElementById(tabName+'-container').classList.remove('hidden');
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  e.target.classList.add('active');
};

// Tab content switcher for the Tabs component
window.switchTabContent = function(e, tabId) {
  const container = e.target.closest('.tabs-container');
  const tabContents = container.querySelectorAll('.tab-content');
  const tabButtons = container.querySelectorAll('.tab-btn');
  
  tabContents.forEach(content => content.style.display = 'none');
  tabButtons.forEach(btn => {
    btn.style.background = '#ddd';
    btn.style.color = '#333';
  });
  
  container.querySelector(`#${tabId}`).style.display = 'block';
  e.target.style.background = '#00d8ff';
  e.target.style.color = 'white';
};

// Tooltip functionality
window.initTooltips = function() {
  document.querySelectorAll('[data-tooltip]').forEach(el => {
    el.addEventListener('mouseenter', function(e) {
      const tooltip = this.querySelector('.tooltip-text');
      if (tooltip) {
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
      }
    });
    el.addEventListener('mouseleave', function(e) {
      const tooltip = this.querySelector('.tooltip-text');
      if (tooltip) {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
      }
    });
  });
};

// Typed text animation
window.startTyped = function(elementId, text, speed = 100) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  let i = 0;
  element.textContent = '';
  
  const timer = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
};

/* ---------------------------
   PAGE MANAGER
----------------------------*/
const pageSelector = document.getElementById('page-selector');
const pagePreviews = document.getElementById('page-previews');
const addPageBtn = document.getElementById('add-page-btn');
const renamePageBtn = document.getElementById('rename-page-btn');
const duplicatePageBtn = document.getElementById('duplicate-page-btn');
const removePageBtn = document.getElementById('remove-page-btn');

const updatePages = () => {
  const pages = editor.Pages.getAll();
  const selected = editor.Pages.getSelected();
  const selectedId = selected ? selected.getId() : null;

  pageSelector.innerHTML = '';
  pagePreviews.innerHTML = '';

  pages.forEach((page, index) => {
    const name = page.get('name') || `Page ${index + 1}`;
    
    // Select Option
    const option = document.createElement('option');
    option.value = page.getId();
    option.textContent = name;
    pageSelector.appendChild(option);

    // Preview Item
    const previewItem = document.createElement('button');
    previewItem.className = `page-preview-item ${page.getId() === selectedId ? 'active' : ''}`;
    previewItem.innerHTML = `<div class="page-preview-thumbnail"></div><div class="page-preview-name">${name}</div>`;
    previewItem.onclick = () => editor.Pages.select(page.getId());
    pagePreviews.appendChild(previewItem);
  });

  if (selectedId) pageSelector.value = selectedId;
  removePageBtn.disabled = pages.length <= 1;
};

pageSelector.onchange = e => editor.Pages.select(e.target.value);
addPageBtn.onclick = () => editor.Pages.add({ name: `Page ${editor.Pages.getAll().length + 1}`, components: '<h1>New Page</h1>' }, { select: true });

renamePageBtn.onclick = () => {
  const selected = editor.Pages.getSelected();
  const newName = prompt('Enter page name:', selected.get('name'));
  if (newName) { selected.set('name', newName); updatePages(); }
};

duplicatePageBtn.onclick = () => {
  const selected = editor.Pages.getSelected();
  const clone = JSON.parse(JSON.stringify(selected.toJSON()));
  delete clone.id;
  clone.name += ' copy';
  editor.Pages.add(clone, { select: true });
};

removePageBtn.onclick = () => editor.Pages.remove(editor.Pages.getSelected());

editor.on('page:add page:remove page:select load', updatePages);

/* ---------------------------
   COUNTDOWN FUNCTIONALITY
----------------------------*/

// Simple countdown function for countdown components
window.startCountdown = function(elementId, targetDate) {
  const countdownElement = document.getElementById(elementId);
  if (!countdownElement) return;
  
  const target = new Date(targetDate).getTime();
  
  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = target - now;
    
    if (distance < 0) {
      clearInterval(interval);
      countdownElement.innerHTML = 'EXPIRED';
      return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    const daysEl = countdownElement.querySelector('#days');
    const hoursEl = countdownElement.querySelector('#hours');
    const minutesEl = countdownElement.querySelector('#minutes');
    const secondsEl = countdownElement.querySelector('#seconds');
    
    if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
  }, 1000);
};