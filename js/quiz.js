// ===== QUIZ =====
// Banco completo de 30 questões
const allQuizQuestions = [
    {
        question: "Observe o gráfico. O que é taxa de amostragem (sample rate)?",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 200'%3E%3Crect fill='%23fff' width='600' height='200'/%3E%3Cpath d='M50 100 Q100 50 150 100 T250 100' stroke='%232d3748' fill='none' stroke-width='2'/%3E%3Cg%3E%3Ccircle cx='50' cy='100' r='4' fill='%2338a169'/%3E%3Ccircle cx='75' cy='75' r='4' fill='%2338a169'/%3E%3Ccircle cx='100' cy='50' r='4' fill='%2338a169'/%3E%3Ccircle cx='125' cy='75' r='4' fill='%2338a169'/%3E%3Ccircle cx='150' cy='100' r='4' fill='%2338a169'/%3E%3Ccircle cx='175' cy='75' r='4' fill='%2338a169'/%3E%3Ccircle cx='200' cy='50' r='4' fill='%2338a169'/%3E%3Ccircle cx='225' cy='75' r='4' fill='%2338a169'/%3E%3Ccircle cx='250' cy='100' r='4' fill='%2338a169'/%3E%3C/g%3E%3Ctext x='300' y='70' font-size='14' fill='%23666'%3EAmostras por segundo%3C/text%3E%3Ctext x='300' y='95' font-size='12' fill='%23999'%3E(Sample Rate)%3C/text%3E%3C/svg%3E",
        options: ["A quantidade de bits por amostra", "O número de amostras capturadas por segundo", "O tamanho do arquivo", "A velocidade de reprodução"],
        correct: 1
    },
    {
        question: "Qual é a taxa de amostragem padrão de um CD de áudio?",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23fff' width='400' height='300'/%3E%3Ccircle cx='200' cy='150' r='100' fill='%23f0f0f0' stroke='%232d3748' stroke-width='3'/%3E%3Ccircle cx='200' cy='150' r='30' fill='%23fff' stroke='%232d3748' stroke-width='2'/%3E%3Ctext x='200' y='260' font-size='18' fill='%232d3748' text-anchor='middle' font-weight='bold'%3ECD de Áudio%3C/text%3E%3Ctext x='200' y='285' font-size='14' fill='%23666' text-anchor='middle'%3EQualidade Padrão%3C/text%3E%3C/svg%3E",
        options: ["22.050 Hz", "44.100 Hz", "48.000 Hz", "96.000 Hz"],
        correct: 1
    },
    {
        question: "Observe a comparação. O que significa profundidade de bits (bit depth) de 16 bits?",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 250'%3E%3Crect fill='%23fff' width='600' height='250'/%3E%3Ctext x='100' y='30' font-size='16' font-weight='bold' fill='%232d3748' text-anchor='middle'%3E8 bits%3C/text%3E%3Ctext x='400' y='30' font-size='16' font-weight='bold' fill='%232d3748' text-anchor='middle'%3E16 bits%3C/text%3E%3Crect x='20' y='50' width='160' height='150' fill='%23f9fafb' stroke='%23cbd5e0' stroke-width='2'/%3E%3Crect x='320' y='50' width='160' height='150' fill='%23f9fafb' stroke='%23cbd5e0' stroke-width='2'/%3E%3Cpath d='M30 125 L50 140 L70 110 L90 125 L110 150 L130 120 L150 135 L170 125' stroke='%232d3748' stroke-width='3' fill='none'/%3E%3Cpath d='M330 125 Q345 138 360 128 T390 122 Q405 136 420 126 T450 124 Q465 140 480 126' stroke='%232d3748' stroke-width='2' fill='none'/%3E%3Ctext x='100' y='225' font-size='12' fill='%23666' text-anchor='middle'%3E256 níveis%3C/text%3E%3Ctext x='400' y='225' font-size='12' fill='%23666' text-anchor='middle'%3E65.536 níveis%3C/text%3E%3C/svg%3E",
        options: ["16 bytes de tamanho", "16 canais diferentes", "65.536 valores possíveis por amostra", "16 segundos de duração"],
        correct: 2
    },
    {
        question: "Segundo o Teorema de Nyquist mostrado no diagrama, para capturar 10 kHz sem perda, qual a taxa mínima?",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 200'%3E%3Crect fill='%23fff' width='500' height='200'/%3E%3Ctext x='250' y='30' font-size='16' font-weight='bold' fill='%232d3748' text-anchor='middle'%3ETeorema de Nyquist%3C/text%3E%3Crect x='50' y='60' width='180' height='80' fill='%23fffbeb' stroke='%23f59e0b' stroke-width='2' rx='8'/%3E%3Ctext x='140' y='90' font-size='14' fill='%232d3748' text-anchor='middle' font-weight='bold'%3EFrequência%3C/text%3E%3Ctext x='140' y='110' font-size='20' fill='%23f59e0b' text-anchor='middle' font-weight='bold'%3E10 kHz%3C/text%3E%3Ctext x='250' y='105' font-size='24' fill='%232d3748'%3E×2 =%3C/text%3E%3Crect x='290' y='60' width='180' height='80' fill='%23e8f5e9' stroke='%2338a169' stroke-width='2' rx='8'/%3E%3Ctext x='380' y='90' font-size='14' fill='%232d3748' text-anchor='middle' font-weight='bold'%3ESample Rate%3C/text%3E%3Ctext x='380' y='110' font-size='20' fill='%2338a169' text-anchor='middle' font-weight='bold'%3E20 kHz%3C/text%3E%3Ctext x='250' y='175' font-size='12' fill='%23666' text-anchor='middle'%3ETaxa mínima = 2x a frequência máxima%3C/text%3E%3C/svg%3E",
        options: ["10 kHz", "15 kHz", "20 kHz", "30 kHz"],
        correct: 2
    },
    { question: "O que é normalização de áudio?", options: ["Converter para MP3", "Ajustar o volume ao pico máximo especificado", "Reduzir tamanho do arquivo", "Remover ruídos"], correct: 1 },
    {
        question: "Observe a tabela. Qual formato NÃO usa compressão com perda?",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 220'%3E%3Crect fill='%23fff' width='600' height='220'/%3E%3Ctext x='300' y='25' font-size='18' font-weight='bold' fill='%232d3748' text-anchor='middle'%3EFormatos de Áudio%3C/text%3E%3Crect x='40' y='50' width='120' height='140' fill='%23e8f5e9' stroke='%2338a169' stroke-width='3' rx='8'/%3E%3Ctext x='100' y='90' font-size='20' font-weight='bold' fill='%232d3748' text-anchor='middle'%3EWAV%3C/text%3E%3Ctext x='100' y='115' font-size='12' fill='%23666' text-anchor='middle'%3ESem perda%3C/text%3E%3Ctext x='100' y='140' font-size='14' fill='%2338a169' text-anchor='middle' font-weight='bold'%3E10 MB%3C/text%3E%3Ctext x='100' y='160' font-size='11' fill='%23999' text-anchor='middle'%3Epor minuto%3C/text%3E%3Crect x='180' y='50' width='120' height='140' fill='%23fff3e0' stroke='%23f59e0b' stroke-width='2' rx='8'/%3E%3Ctext x='240' y='90' font-size='20' font-weight='bold' fill='%232d3748' text-anchor='middle'%3EMP3%3C/text%3E%3Ctext x='240' y='115' font-size='12' fill='%23666' text-anchor='middle'%3ECom perda%3C/text%3E%3Ctext x='240' y='140' font-size='14' fill='%23f59e0b' text-anchor='middle' font-weight='bold'%3E1 MB%3C/text%3E%3Ctext x='240' y='160' font-size='11' fill='%23999' text-anchor='middle'%3Epor minuto%3C/text%3E%3Crect x='320' y='50' width='120' height='140' fill='%23fff3e0' stroke='%23f59e0b' stroke-width='2' rx='8'/%3E%3Ctext x='380' y='90' font-size='20' font-weight='bold' fill='%232d3748' text-anchor='middle'%3EAAC%3C/text%3E%3Ctext x='380' y='115' font-size='12' fill='%23666' text-anchor='middle'%3ECom perda%3C/text%3E%3Ctext x='380' y='140' font-size='14' fill='%23f59e0b' text-anchor='middle' font-weight='bold'%3E0.8 MB%3C/text%3E%3Ctext x='380' y='160' font-size='11' fill='%23999' text-anchor='middle'%3Epor minuto%3C/text%3E%3Crect x='460' y='50' width='120' height='140' fill='%23fff3e0' stroke='%23f59e0b' stroke-width='2' rx='8'/%3E%3Ctext x='520' y='90' font-size='20' font-weight='bold' fill='%232d3748' text-anchor='middle'%3EOGG%3C/text%3E%3Ctext x='520' y='115' font-size='12' fill='%23666' text-anchor='middle'%3ECom perda%3C/text%3E%3Ctext x='520' y='140' font-size='14' fill='%23f59e0b' text-anchor='middle' font-weight='bold'%3E1 MB%3C/text%3E%3Ctext x='520' y='160' font-size='11' fill='%23999' text-anchor='middle'%3Epor minuto%3C/text%3E%3C/svg%3E",
        options: ["MP3", "AAC", "WAV", "OGG"],
        correct: 2
    },
    {
        question: "Observe a ilustração. Quantos canais tem uma gravação estéreo?",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 250'%3E%3Crect fill='%23fff' width='500' height='250'/%3E%3Ctext x='250' y='30' font-size='18' font-weight='bold' fill='%232d3748' text-anchor='middle'%3EMono vs Estéreo%3C/text%3E%3Cg%3E%3Ccircle cx='120' cy='130' r='60' fill='%23f9fafb' stroke='%232d3748' stroke-width='3'/%3E%3Ctext x='120' y='140' font-size='36' fill='%232d3748' text-anchor='middle' font-weight='bold'%3E1%3C/text%3E%3Ctext x='120' y='215' font-size='16' fill='%23666' text-anchor='middle' font-weight='bold'%3EMONO%3C/text%3E%3Ctext x='120' y='235' font-size='12' fill='%23999' text-anchor='middle'%3E1 canal%3C/text%3E%3C/g%3E%3Cg%3E%3Ccircle cx='330' cy='110' r='50' fill='%23e8f5e9' stroke='%2338a169' stroke-width='3'/%3E%3Ctext x='330' y='120' font-size='28' fill='%232d3748' text-anchor='middle' font-weight='bold'%3EL%3C/text%3E%3Ccircle cx='400' cy='150' r='50' fill='%23e8f5e9' stroke='%2338a169' stroke-width='3'/%3E%3Ctext x='400' y='160' font-size='28' fill='%232d3748' text-anchor='middle' font-weight='bold'%3ER%3C/text%3E%3Ctext x='365' y='225' font-size='16' fill='%23666' text-anchor='middle' font-weight='bold'%3EESTÉREO%3C/text%3E%3Ctext x='365' y='245' font-size='12' fill='%23999' text-anchor='middle'%3E2 canais%3C/text%3E%3C/g%3E%3C/svg%3E",
        options: ["1", "2", "4", "8"],
        correct: 1
    },
    {
        question: "Veja o gráfico de faixa dinâmica. O que acontece ao aumentar a profundidade de bits?",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 250'%3E%3Crect fill='%23fff' width='500' height='250'/%3E%3Ctext x='250' y='25' font-size='16' font-weight='bold' fill='%232d3748' text-anchor='middle'%3EFaixa Dinâmica por Profundidade%3C/text%3E%3Crect x='50' y='60' width='80' height='140' fill='%23fee' stroke='%23e53e3e'/%3E%3Ctext x='90' y='85' font-size='14' fill='%232d3748' text-anchor='middle' font-weight='bold'%3E8 bits%3C/text%3E%3Ctext x='90' y='180' font-size='12' fill='%23666' text-anchor='middle'%3E48 dB%3C/text%3E%3Crect x='160' y='50' width='80' height='150' fill='%23ffd' stroke='%23f59e0b'/%3E%3Ctext x='200' y='75' font-size='14' fill='%232d3748' text-anchor='middle' font-weight='bold'%3E16 bits%3C/text%3E%3Ctext x='200' y='185' font-size='12' fill='%23666' text-anchor='middle'%3E96 dB%3C/text%3E%3Crect x='270' y='40' width='80' height='160' fill='%23dfd' stroke='%2338a169'/%3E%3Ctext x='310' y='65' font-size='14' fill='%232d3748' text-anchor='middle' font-weight='bold'%3E24 bits%3C/text%3E%3Ctext x='310' y='190' font-size='12' fill='%23666' text-anchor='middle'%3E144 dB%3C/text%3E%3Cpath d='M 130 100 L 160 80' stroke='%232d3748' stroke-width='2' marker-end='url(%23arrow)'/%3E%3Cpath d='M 240 90 L 270 70' stroke='%232d3748' stroke-width='2' marker-end='url(%23arrow)'/%3E%3Ctext x='400' y='120' font-size='13' fill='%232d3748'%3EMais bits =%3C/text%3E%3Ctext x='400' y='140' font-size='13' fill='%2338a169' font-weight='bold'%3EMais detalhes%3C/text%3E%3Ctext x='400' y='160' font-size='13' fill='%2338a169' font-weight='bold'%3EMaior faixa%3C/text%3E%3C/svg%3E",
        options: ["Áudio mais rápido", "Maior faixa dinâmica e detalhes", "Áudio mais longo", "Taxa de amostragem aumenta"],
        correct: 1
    },
    { question: "Qual a faixa dinâmica aproximada de 16 bits?", options: ["48 dB", "72 dB", "96 dB", "120 dB"], correct: 2 },
    {
        question: "Veja o diagrama do processo de conversão. O que significa ADC?",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 180'%3E%3Crect fill='%23fff' width='600' height='180'/%3E%3Crect x='50' y='50' width='120' height='80' fill='%23fff3e0' stroke='%23f59e0b' stroke-width='2' rx='8'/%3E%3Ctext x='110' y='85' font-size='14' fill='%232d3748' text-anchor='middle' font-weight='bold'%3EÁudio%3C/text%3E%3Ctext x='110' y='105' font-size='14' fill='%232d3748' text-anchor='middle' font-weight='bold'%3EAnalógico%3C/text%3E%3Cpath d='M 170 90 L 210 90' stroke='%232d3748' stroke-width='2' marker-end='url(%23arrow)'/%3E%3Crect x='210' y='50' width='150' height='80' fill='%23e8f5e9' stroke='%2338a169' stroke-width='3' rx='8'/%3E%3Ctext x='285' y='80' font-size='18' fill='%232d3748' text-anchor='middle' font-weight='bold'%3EADC%3C/text%3E%3Ctext x='285' y='105' font-size='11' fill='%23666' text-anchor='middle'%3EConversor%3C/text%3E%3Cpath d='M 360 90 L 400 90' stroke='%232d3748' stroke-width='2' marker-end='url(%23arrow)'/%3E%3Crect x='400' y='50' width='120' height='80' fill='%23e0f2fe' stroke='%2338a169' stroke-width='2' rx='8'/%3E%3Ctext x='460' y='85' font-size='14' fill='%232d3748' text-anchor='middle' font-weight='bold'%3EÁudio%3C/text%3E%3Ctext x='460' y='105' font-size='14' fill='%232d3748' text-anchor='middle' font-weight='bold'%3EDigital%3C/text%3E%3Cdefs%3E%3Cmarker id='arrow' markerWidth='10' markerHeight='10' refX='9' refY='3' orient='auto'%3E%3Cpath d='M0,0 L0,6 L9,3 z' fill='%232d3748'/%3E%3C/marker%3E%3C/defs%3E%3C/svg%3E",
        options: ["Audio Data Compression", "Analog-to-Digital Converter", "Advanced Digital Codec", "Automatic Dynamic Control"],
        correct: 1
    },
    { question: "Qual taxa de amostragem é usada em vídeo profissional?", options: ["22.05 kHz", "44.1 kHz", "48 kHz", "88.2 kHz"], correct: 2 },
    { question: "Quantos bytes por amostra usa um áudio de 24 bits?", options: ["1 byte", "2 bytes", "3 bytes", "4 bytes"], correct: 2 },
    {
        question: "Observe o diagrama. O que é aliasing em áudio digital?",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 240'%3E%3Crect fill='%23fff' width='600' height='240'/%3E%3Ctext x='300' y='25' font-size='16' font-weight='bold' fill='%232d3748' text-anchor='middle'%3EAliasing: Taxa Insuficiente%3C/text%3E%3Cpath d='M 50 120 Q 100 60 150 120 T 250 120 Q 300 180 350 120' stroke='%23999' stroke-width='2' stroke-dasharray='4,4' fill='none'/%3E%3Ctext x='400' y='70' font-size='12' fill='%23999'%3ESinal Original%3C/text%3E%3Ccircle cx='50' cy='120' r='5' fill='%23e53e3e'/%3E%3Ccircle cx='150' cy='120' r='5' fill='%23e53e3e'/%3E%3Ccircle cx='250' cy='120' r='5' fill='%23e53e3e'/%3E%3Ccircle cx='350' cy='120' r='5' fill='%23e53e3e'/%3E%3Cpath d='M 50 120 L 150 120 L 250 120 L 350 120' stroke='%23e53e3e' stroke-width='2' fill='none'/%3E%3Ctext x='400' y='95' font-size='12' fill='%23e53e3e'%3EPoucas amostras%3C/text%3E%3Ctext x='400' y='115' font-size='11' fill='%23e53e3e'%3E= Distorção%3C/text%3E%3Crect x='50' y='200' width='500' height='30' fill='%23fee' stroke='%23e53e3e' stroke-width='2' rx='4'/%3E%3Ctext x='300' y='220' font-size='13' fill='%232d3748' text-anchor='middle' font-weight='bold'%3ETaxa de amostragem muito baixa causa aliasing%3C/text%3E%3C/svg%3E",
        options: ["Aumento de volume", "Distorção por taxa de amostragem insuficiente", "Eco artificial", "Compressão de dados"],
        correct: 1
    },
    {
        question: "Veja o cálculo visual. Qual o tamanho aproximado de 1 minuto de áudio CD estéreo?",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 550 200'%3E%3Crect fill='%23fff' width='550' height='200'/%3E%3Ctext x='275' y='25' font-size='16' font-weight='bold' fill='%232d3748' text-anchor='middle'%3ECálculo: CD Estéreo (1 minuto)%3C/text%3E%3Crect x='30' y='50' width='490' height='130' fill='%23f9fafb' stroke='%23cbd5e0' stroke-width='2' rx='8'/%3E%3Ctext x='275' y='75' font-size='13' fill='%232d3748' text-anchor='middle'%3E44.100 samples/seg × 16 bits × 2 canais × 60 seg%3C/text%3E%3Ctext x='275' y='100' font-size='13' fill='%23666' text-anchor='middle'%3E=%3C/text%3E%3Ctext x='275' y='125' font-size='13' fill='%232d3748' text-anchor='middle'%3E44.100 × 2 bytes × 2 × 60%3C/text%3E%3Ctext x='275' y='150' font-size='13' fill='%23666' text-anchor='middle'%3E=%3C/text%3E%3Ctext x='275' y='170' font-size='18' fill='%2338a169' text-anchor='middle' font-weight='bold'%3E10.584.000 bytes ≈ 10 MB%3C/text%3E%3C/svg%3E",
        options: ["1 MB", "5 MB", "10 MB", "50 MB"],
        correct: 2
    },
    { question: "O que significa PCM?", options: ["Professional Computer Music", "Pulse Code Modulation", "Portable Compression Method", "Peak Control Management"], correct: 1 },
    { question: "Qual profundidade de bits é usada em gravação profissional?", options: ["8 bits", "16 bits", "24 bits", "32 bits"], correct: 2 },
    { question: "O que é dithering em áudio digital?", options: ["Aumento de volume", "Técnica para reduzir ruído de quantização", "Compressão de arquivo", "Efeito de reverberação"], correct: 1 },
    { question: "Qual formato oferece melhor qualidade: MP3 ou AAC?", options: ["MP3 sempre", "AAC geralmente", "São idênticos", "Depende só do bitrate"], correct: 1 },
    {
        question: "Observe o espectro de frequências. O que acontece ao reduzir a taxa de amostragem?",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 220'%3E%3Crect fill='%23fff' width='500' height='220'/%3E%3Ctext x='250' y='25' font-size='16' font-weight='bold' fill='%232d3748' text-anchor='middle'%3EEspectro de Frequências%3C/text%3E%3Crect x='50' y='50' width='180' height='120' fill='%23e8f5e9' stroke='%2338a169' stroke-width='2'/%3E%3Ctext x='140' y='75' font-size='12' fill='%232d3748' text-anchor='middle' font-weight='bold'%3ETaxa Alta%3C/text%3E%3Crect x='60' y='90' width='160' height='70' fill='%2338a169' opacity='0.3'/%3E%3Ctext x='140' y='130' font-size='11' fill='%232d3748' text-anchor='middle'%3EGraves + Agudos%3C/text%3E%3Ctext x='140' y='145' font-size='11' fill='%232d3748' text-anchor='middle'%3E20 Hz - 20 kHz%3C/text%3E%3Crect x='270' y='50' width='180' height='120' fill='%23fee' stroke='%23e53e3e' stroke-width='2'/%3E%3Ctext x='360' y='75' font-size='12' fill='%232d3748' text-anchor='middle' font-weight='bold'%3ETaxa Baixa%3C/text%3E%3Crect x='280' y='90' width='80' height='70' fill='%23e53e3e' opacity='0.3'/%3E%3Ctext x='320' y='130' font-size='11' fill='%232d3748' text-anchor='middle'%3ESó Graves%3C/text%3E%3Ctext x='400' y='130' font-size='20' fill='%23e53e3e'%3E✗%3C/text%3E%3Ctext x='360' y='190' font-size='12' fill='%23e53e3e' text-anchor='middle' font-weight='bold'%3EPerde frequências agudas%3C/text%3E%3C/svg%3E",
        options: ["Perde frequências agudas", "Aumenta o volume", "Melhora a qualidade", "Nada muda"],
        correct: 0
    },
    { question: "Quantos bits usa um áudio de CD padrão?", options: ["8 bits", "16 bits", "24 bits", "32 bits"], correct: 1 },
    {
        question: "Veja o gráfico de amplitude. O que é clipping em áudio?",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 220'%3E%3Crect fill='%23fff' width='500' height='220'/%3E%3Ctext x='250' y='25' font-size='16' font-weight='bold' fill='%232d3748' text-anchor='middle'%3EClipping: Distorção por Amplitude%3C/text%3E%3Cline x1='50' y1='60' x2='450' y2='60' stroke='%23e53e3e' stroke-width='2' stroke-dasharray='4,2'/%3E%3Ctext x='460' y='65' font-size='11' fill='%23e53e3e'%3EMáx%3C/text%3E%3Cline x1='50' y1='160' x2='450' y2='160' stroke='%23e53e3e' stroke-width='2' stroke-dasharray='4,2'/%3E%3Ctext x='460' y='165' font-size='11' fill='%23e53e3e'%3EMín%3C/text%3E%3Cpath d='M 50 110 Q 80 90 110 110 Q 140 130 170 110 Q 200 40 230 110 Q 260 180 290 110 Q 320 90 350 110 Q 380 130 410 110' stroke='%232d3748' stroke-width='2' fill='none'/%3E%3Crect x='185' y='60' width='30' height='3' fill='%23e53e3e'/%3E%3Crect x='245' y='157' width='30' height='3' fill='%23e53e3e'/%3E%3Ctext x='250' y='200' font-size='12' fill='%23e53e3e' text-anchor='middle' font-weight='bold'%3ESinal cortado = Distorção%3C/text%3E%3C/svg%3E",
        options: ["Corte de frequências", "Distorção por excesso de amplitude", "Edição de arquivo", "Normalização"],
        correct: 1
    },
    {
        question: "Veja o gráfico de audição humana. Qual a frequência máxima audível pelo ser humano?",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 550 200'%3E%3Crect fill='%23fff' width='550' height='200'/%3E%3Ctext x='275' y='25' font-size='16' font-weight='bold' fill='%232d3748' text-anchor='middle'%3EFaixa de Audição Humana%3C/text%3E%3Crect x='50' y='60' width='450' height='80' fill='%23e8f5e9' stroke='%2338a169' stroke-width='3' rx='8'/%3E%3Ctext x='100' y='90' font-size='14' fill='%232d3748' font-weight='bold'%3E20 Hz%3C/text%3E%3Ctext x='100' y='110' font-size='11' fill='%23666'%3EGraves%3C/text%3E%3Ctext x='100' y='125' font-size='11' fill='%23666'%3E(baixo)%3C/text%3E%3Ctext x='275' y='105' font-size='13' fill='%232d3748' text-anchor='middle'%3EMédios%3C/text%3E%3Ctext x='425' y='90' font-size='14' fill='%232d3748' font-weight='bold'%3E20.000 Hz%3C/text%3E%3Ctext x='425' y='110' font-size='11' fill='%23666'%3EAgudos%3C/text%3E%3Ctext x='425' y='125' font-size='11' fill='%23666'%3E(alto)%3C/text%3E%3Cpath d='M 100 100 L 425 100' stroke='%2338a169' stroke-width='2' marker-end='url(%23arrow)'/%3E%3Ctext x='275' y='175' font-size='12' fill='%23666' text-anchor='middle'%3ELimite superior: 20 kHz (20.000 Hz)%3C/text%3E%3Cdefs%3E%3Cmarker id='arrow' markerWidth='10' markerHeight='10' refX='9' refY='3' orient='auto'%3E%3Cpath d='M0,0 L0,6 L9,3 z' fill='%2338a169'/%3E%3C/marker%3E%3C/defs%3E%3C/svg%3E",
        options: ["10 kHz", "15 kHz", "20 kHz", "40 kHz"],
        correct: 2
    },
    { question: "O que é bitrate em arquivos MP3?", options: ["Taxa de amostragem", "Quantidade de dados por segundo", "Profundidade de bits", "Número de canais"], correct: 1 },
    { question: "Qual formato é melhor para edição: WAV ou MP3?", options: ["MP3", "WAV", "São iguais", "Nenhum dos dois"], correct: 1 },
    { question: "O que significa mono em áudio?", options: ["Música única", "Um canal de áudio", "Áudio monótono", "Modo de gravação"], correct: 1 },
    { question: "Qual a taxa de amostragem de telefonia VoIP?", options: ["8 kHz", "16 kHz", "44.1 kHz", "48 kHz"], correct: 0 },
    {
        question: "Observe o diagrama de processamento. O que é ganho (gain) em processamento de áudio?",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 200'%3E%3Crect fill='%23fff' width='500' height='200'/%3E%3Ctext x='250' y='25' font-size='16' font-weight='bold' fill='%232d3748' text-anchor='middle'%3EGanho (Gain)%3C/text%3E%3Cg%3E%3Crect x='50' y='60' width='120' height='100' fill='%23fff3e0' stroke='%23f59e0b' stroke-width='2' rx='8'/%3E%3Ctext x='110' y='85' font-size='12' fill='%232d3748' text-anchor='middle'%3ESinal Original%3C/text%3E%3Cpath d='M 70 130 Q 80 120 90 130 T 110 130 Q 120 140 130 130 T 150 130' stroke='%232d3748' stroke-width='2' fill='none'/%3E%3C/g%3E%3Ctext x='195' y='115' font-size='20' fill='%232d3748' font-weight='bold'%3E× 2%3C/text%3E%3Cpath d='M 170 110 L 210 110' stroke='%232d3748' stroke-width='2' marker-end='url(%23arrow)'/%3E%3Cg%3E%3Crect x='230' y='50' width='120' height='120' fill='%23e8f5e9' stroke='%2338a169' stroke-width='3' rx='8'/%3E%3Ctext x='290' y='75' font-size='12' fill='%232d3748' text-anchor='middle'%3ESinal Amplificado%3C/text%3E%3Cpath d='M 250 130 Q 260 105 270 130 T 290 130 Q 300 155 310 130 T 330 130' stroke='%232d3748' stroke-width='2.5' fill='none'/%3E%3C/g%3E%3Ctext x='250' y='190' font-size='12' fill='%2338a169' text-anchor='middle' font-weight='bold'%3EGain = Amplificação do sinal%3C/text%3E%3Cdefs%3E%3Cmarker id='arrow' markerWidth='10' markerHeight='10' refX='9' refY='3' orient='auto'%3E%3Cpath d='M0,0 L0,6 L9,3 z' fill='%232d3748'/%3E%3C/marker%3E%3C/defs%3E%3C/svg%3E",
        options: ["Lucro financeiro", "Amplificação do sinal", "Velocidade de reprodução", "Formato de arquivo"],
        correct: 1
    },
    {
        question: "Veja a comparação de tamanhos. Qual o tamanho típico de um MP3 de 1 minuto (128 kbps)?",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 220'%3E%3Crect fill='%23fff' width='500' height='220'/%3E%3Ctext x='250' y='25' font-size='16' font-weight='bold' fill='%232d3748' text-anchor='middle'%3ETamanho de Arquivos (1 minuto)%3C/text%3E%3Crect x='80' y='60' width='60' height='120' fill='%23e8f5e9' stroke='%2338a169' stroke-width='2'/%3E%3Ctext x='110' y='100' font-size='28' fill='%2338a169' text-anchor='middle' font-weight='bold'%3E1%3C/text%3E%3Ctext x='110' y='120' font-size='14' fill='%232d3748' text-anchor='middle'%3EMB%3C/text%3E%3Ctext x='110' y='195' font-size='12' fill='%23666' text-anchor='middle' font-weight='bold'%3EMP3%3C/text%3E%3Ctext x='110' y='210' font-size='10' fill='%23999' text-anchor='middle'%3E128 kbps%3C/text%3E%3Crect x='220' y='50' width='60' height='130' fill='%23fff3e0' stroke='%23f59e0b' stroke-width='2'/%3E%3Ctext x='250' y='95' font-size='28' fill='%23f59e0b' text-anchor='middle' font-weight='bold'%3E10%3C/text%3E%3Ctext x='250' y='115' font-size='14' fill='%232d3748' text-anchor='middle'%3EMB%3C/text%3E%3Ctext x='250' y='195' font-size='12' fill='%23666' text-anchor='middle' font-weight='bold'%3EWAV%3C/text%3E%3Ctext x='250' y='210' font-size='10' fill='%23999' text-anchor='middle'%3E16-bit stereo%3C/text%3E%3C/svg%3E",
        options: ["500 KB", "1 MB", "5 MB", "10 MB"],
        correct: 1
    },
    { question: "O que é latência em áudio digital?", options: ["Atraso entre entrada e saída", "Qualidade do som", "Volume do áudio", "Taxa de compressão"], correct: 0 },
    { question: "Qual formato usa codec open-source?", options: ["MP3", "AAC", "WMA", "OGG Vorbis"], correct: 3 }
];

// Questões selecionadas aleatoriamente para o quiz atual
let selectedQuestions = [];
let selectedAnswers = {};

// Função para selecionar 10 questões aleatórias
function selectRandomQuestions() {
    const shuffled = [...allQuizQuestions].sort(() => 0.5 - Math.random());
    selectedQuestions = shuffled.slice(0, 10);
}

// Renderizar quiz
function renderQuiz() {
    selectedAnswers = {};
    selectRandomQuestions();

    const container = document.getElementById('quizContainer');
    container.innerHTML = '';

    selectedQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';

        const imageHtml = q.image ? `
            <div style="text-align: center; margin: 20px 0;">
                <img src="${q.image}" alt="Ilustração da questão" style="max-width: 100%; height: auto; border-radius: 8px; border: 2px solid #e2e8f0;">
            </div>
        ` : '';

        questionDiv.innerHTML = `
            <h3>Questão ${index + 1}</h3>
            ${imageHtml}
            <p style="font-size: 1.05em; margin: 16px 0; font-weight: 500;">${q.question}</p>
            <div class="quiz-options" id="options-${index}">
                ${q.options.map((option, optIndex) => `
                    <div class="quiz-option" onclick="selectOption(${index}, ${optIndex})">
                        ${String.fromCharCode(65 + optIndex)}) ${option}
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(questionDiv);
    });
}

// Selecionar opção
function selectOption(questionIndex, optionIndex) {
    // Remover seleção anterior
    const optionsDiv = document.getElementById(`options-${questionIndex}`);
    optionsDiv.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.remove('selected');
    });

    // Adicionar nova seleção
    optionsDiv.children[optionIndex].classList.add('selected');
    selectedAnswers[questionIndex] = optionIndex;
}

// Verificar respostas
function checkAnswers() {
    let correct = 0;
    let total = selectedQuestions.length;

    selectedQuestions.forEach((q, index) => {
        const optionsDiv = document.getElementById(`options-${index}`);
        const options = optionsDiv.querySelectorAll('.quiz-option');

        options.forEach((opt, optIndex) => {
            opt.classList.remove('correct', 'incorrect', 'selected');

            if (optIndex === q.correct) {
                opt.classList.add('correct');
            } else if (selectedAnswers[index] === optIndex) {
                opt.classList.add('incorrect');
            }

            opt.onclick = null;
        });

        if (selectedAnswers[index] === q.correct) {
            correct++;
        }
    });

    const percentage = (correct / total * 100).toFixed(1);
    const resultDiv = document.getElementById('quizResult');
    resultDiv.style.display = 'block';

    let message = '';

    if (percentage >= 90) {
        message = 'Excelente desempenho!';
    } else if (percentage >= 70) {
        message = 'Muito bom!';
    } else if (percentage >= 50) {
        message = 'Bom trabalho!';
    } else {
        message = 'Continue estudando!';
    }

    resultDiv.innerHTML = `
        <strong>${message}</strong><br>
        Você acertou ${correct} de ${total} questões (${percentage}%)
    `;

    document.getElementById('checkBtn').disabled = true;
}

// Resetar quiz
function resetQuiz() {
    renderQuiz();
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('checkBtn').disabled = false;
}

// Inicializar quiz ao carregar
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('quizContainer')) {
        renderQuiz();
    }
});
