
export const sendSMS = ({ phoneNumberSet, verificationCode }) => {
 
  fetch(`/sendSMS/send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      phoneNumberSet,
      verificationCode
        }),
  })
    .then((res) => res.json())
    .then(console.log)
    .catch(console.log);
};
