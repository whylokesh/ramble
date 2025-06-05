const { spawn } = require('child_process');

const subprocess = spawn('npm', ['run', 'start'], { stdio: 'inherit', windowsHide: true, shell: true });

subprocess.on('close', (code) => {
    console.log(`npm start exited with code ${code}`);
    process.exit(code);
});
