const form = Registeration.getElementById('add');
const addMemberButton = Registeration.getElementById('add-member');

let Counter = 1;

addMemberButton.addEventListener('click', () => {
  const newMemberNameFields ='<label>Name:</label> <br> <input type="text" name="name_${Counter}" id="name_${Counter}">';
  const updatedFields = newMemberNameFields.replace(/name/g, `name_${Counter}`);
  updatedFields.replace(/email/g, `email_${Counter}`);
  form.innerHTML += updatedFields;
  Counter++;
});
