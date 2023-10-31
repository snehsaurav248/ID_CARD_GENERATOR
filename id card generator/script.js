function generateCard() {
    const name = document.getElementById('name').value;
    const college = document.getElementById('college').value;
    const id = document.getElementById('id').value;
    const photo = document.getElementById('photo').files[0];
  
    
    if (!name || !college || !id || !photo) {
      alert('Please fill in all the fields and select a photo.');
      return;
    }
  
    
    const reader = new FileReader();
    reader.onload = function(event) {
        const photoUrl = event.target.result;

        
        const cardImage = document.getElementById('cardImage');
        const cardDetails = document.getElementById('cardDetails');
    
        cardImage.innerHTML = `<img src="${photoUrl}" alt="Student Photo" width="150" height="150">`;
        cardDetails.innerHTML = `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>College:</strong> ${college}</p>
          <p><strong>Student ID:</strong> ${id}</p>
        `;
    
       
        const card = document.getElementById('card');
        card.style.display = 'block';
      };
    
      reader.readAsDataURL(photo);
    }
    
  