const hasil2 = document.querySelectorAll('.output');
const jakarta2 =  document.querySelectorAll('.siswa');

jakarta2.forEach((nama) => {
    nama.addEventListener('click',(event) =>{
        jakarta2.innerHTML += event.target.value;
    });
});
