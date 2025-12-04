# 📁 ASSETS DO PROJETO - ÁUDIO DIGITAL

Este diretório contém todos os arquivos de mídia utilizados no site educacional de Áudio Digital.

## 📂 Estrutura de Pastas

```
assets/
├── svg/           → Imagens vetoriais (ícones e diagramas)
├── images/        → Geradores de imagens matriciais PNG
└── audio/         → Arquivos e notas sobre áudio MIDI
```

---

## 🎨 SVG - IMAGENS VETORIAIS (12 arquivos)

### Ícones e Logo:
1. **logo-icon.svg** - Logo do site (ícone "AD" com gradiente azul)
2. **hero-audio-icon.svg** - Ícone de áudio grande da seção hero

### Ícones de Features (6 cards):
3. **feature-fundamentos.svg** - Barras de equalização animadas
4. **feature-digitalizacao.svg** - Onda senoidal com pontos de amostragem
5. **feature-formatos.svg** - Player de áudio estilizado
6. **feature-pratica.svg** - Círculos concêntricos (radar/ondas)
7. **feature-aplicacoes.svg** - Múltiplas camadas/janelas
8. **feature-quiz.svg** - Checklist com checkmark animado

### Diagramas Técnicos:
9. **conversion-adc.svg** - Fluxo completo de conversão A/D (Microfone → ADC → Processamento → DAC → Alto-falante)
10. **waveform-comparison.svg** - Comparação visual entre áudio analógico e digital
11. **sample-rate-comparison.svg** - Diferença entre 8 kHz e 44.1 kHz
12. **bit-depth-comparison.svg** - Visualização de 8 bits vs 16 bits

**Características:**
- ✅ Formato XML padrão SVG 1.1
- ✅ Escaláveis sem perda de qualidade
- ✅ Animações CSS integradas (animate tags)
- ✅ Cores usando paleta do site (#2563eb, #10b981, etc)
- ✅ ViewBox definido para responsividade
- ✅ Comentários descritivos

---

## 🖼️ IMAGES - GERADORES DE PNG (3 arquivos HTML)

Como PNGs são imagens matriciais, fornecemos geradores HTML/Canvas para criar as imagens:

### Como usar:
1. Abra cada arquivo `.html` no navegador
2. Aguarde o canvas renderizar
3. Clique com botão direito na imagem
4. Selecione "Salvar imagem como..."
5. Salve com extensão `.png`

### Geradores disponíveis:

1. **generate-waveform-png.html**
   - Gera: Onda senoidal azul (800x300px)
   - Uso: Visualização básica de forma de onda
   - Características: Grid, título, onda suave

2. **generate-spectrum-png.html**
   - Gera: Espectro de frequências (600x400px)
   - Uso: Análise de frequência visual
   - Características: Barras com gradiente colorido, eixo Hz

3. **generate-formats-png.html**
   - Gera: Comparação de tamanhos de formatos (800x500px)
   - Uso: Infográfico de formatos de áudio
   - Características: Barras comparativas WAV, FLAC, MP3, AAC, OGG

**Características dos PNGs gerados:**
- ✅ Resolução adequada para web
- ✅ Background branco
- ✅ Bordas arredondadas
- ✅ Tipografia clara
- ✅ Paleta de cores consistente

---

## 🎵 AUDIO - ARQUIVOS MIDI

### 1. background-music-notes.txt
Contém a estrutura MIDI em formato texto legível:

**Especificações:**
- Format: 0 (single track)
- Tempo: 120 BPM
- Time Signature: 4/4
- Instrument: Piano (Program 0)
- Notes: C4 → E4 → G4 → C5 (acorde de Dó maior ascendente)
- Duration: Cada nota dura 1 tempo (480 ticks)

**Notas MIDI:**
```
Time    Note    Frequency
0       C4      261.63 Hz (Middle C)
480     E4      329.63 Hz
960     G4      392.00 Hz
1440    C5      523.25 Hz
```

### Para converter em arquivo .mid binário:

**Opção 1 - Python (usando mido):**
```python
from mido import MidiFile, MidiTrack, Message, MetaMessage

mid = MidiFile()
track = MidiTrack()
mid.tracks.append(track)

track.append(MetaMessage('set_tempo', tempo=500000))
track.append(MetaMessage('time_signature', numerator=4, denominator=4))
track.append(Message('program_change', program=0, time=0))

notes = [60, 64, 67, 72]  # C, E, G, C5
for note in notes:
    track.append(Message('note_on', note=note, velocity=100, time=0))
    track.append(Message('note_off', note=note, velocity=0, time=480))

track.append(MetaMessage('end_of_track', time=0))
mid.save('background-music.mid')
```

**Opção 2 - Online MIDI Creator:**
- https://signal.vercel.app/edit
- https://onlinesequencer.net/
- https://musiclab.chromeexperiments.com/Song-Maker/

**Opção 3 - DAW (Digital Audio Workstation):**
- FL Studio, Ableton Live, Logic Pro, GarageBand
- Crie 4 notas MIDI: C-E-G-C
- Exporte como .mid

---

## 📊 RESUMO DE ASSETS

| Tipo | Quantidade | Formato | Tamanho Aprox. |
|------|------------|---------|----------------|
| SVG Ícones | 8 | .svg | 1-3 KB cada |
| SVG Diagramas | 4 | .svg | 3-8 KB cada |
| PNG Geradores | 3 | .html | Canvas → PNG |
| MIDI Notes | 1 | .txt → .mid | ~200 bytes |
| **TOTAL** | **16** | - | **~50 KB** |

---

## 🎯 USO NO SITE

### SVGs inline no HTML:
```html
<!-- Exemplo: Logo -->
<div class="logo-icon">
    <img src="assets/svg/logo-icon.svg" alt="Logo AD">
</div>

<!-- Exemplo: Diagram -->
<img src="assets/svg/conversion-adc.svg" 
     alt="Processo de Conversão ADC" 
     style="max-width: 100%;">
```

### PNGs gerados:
```html
<!-- Após gerar e salvar -->
<img src="assets/images/waveform.png" 
     alt="Forma de Onda" 
     width="800" height="300">
```

### MIDI no JavaScript:
```javascript
const audio = new Audio('assets/audio/background-music.mid');
audio.loop = true;
audio.volume = 0.4;
audio.play();
```

---

## 🛠️ FERRAMENTAS RECOMENDADAS

**Para editar SVG:**
- Inkscape (gratuito, open-source)
- Adobe Illustrator
- Figma (online)
- VS Code com extensão SVG

**Para criar PNG:**
- Navegador web (para geradores HTML)
- GIMP (gratuito)
- Photoshop
- Canva (online)

**Para MIDI:**
- mido (Python library)
- FL Studio / Ableton / Logic
- Online Sequencer
- MIDI Editor

---

## 📝 NOTAS IMPORTANTES

1. **SVGs são preferíveis** para ícones e diagramas (escaláveis, menor tamanho)
2. **PNGs** são úteis para screenshots, fotos, ou gráficos complexos
3. **MIDI** é leve e perfeito para música de fundo sintética
4. Todos os arquivos seguem a **paleta de cores do site**
5. Diagramas incluem **texto legível** mesmo em tamanhos pequenos

---

## 🔄 ATUALIZAÇÕES

**Versão 1.0** - 03/12/2025
- ✅ 12 arquivos SVG criados
- ✅ 3 geradores PNG HTML
- ✅ 1 arquivo MIDI notes
- ✅ Documentação completa

---

**Desenvolvido para o projeto Áudio Digital para Sistemas Multimídia**
