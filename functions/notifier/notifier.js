/* eslint-disable */
require("dotenv").config();
exports.handler = function(event, context, callback) {
  try {
    const payload = JSON.parse(event.body); /*.payload;*/
    const { client, kin } = payload; /*.data*/
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "eckhardt.dreyer@gmail.com",
      from: "'Namdrive Website 🚗' <support@kaizenmedia.co.za>",
      subject: "New booking from your website.",
      text: `
        You have a new booking from the Namdrive website: \n\n

        client: \n
          package -> ${client.package} \n
          bookingDate -> ${client.bookingDate} \n
          firstnames -> ${client.firstnames} \n
          lastname -> ${client.lastname} \n
          birthday -> ${client.birthday} \n
          idNumber -> ${client.idNumber} \n
          gender -> ${client.gender} \n
          email -> ${client.email} \n
          cellphone -> ${client.cellphone} \n
          address -> ${client.address} \n
          experience -> ${client.experience} \n\n \n
        kin: \n
          firstnames -> ${kin.firstnames || "N/A"} \n
          lastname -> ${kin.lastname || "N/A"} \n
          cellphone -> ${kin.cellphone || "N/A"} \n
          idNumber -> ${kin.idNumber || "N/A"} \n
          title -> ${kin.title || "N/A"} \n
          relationship -> ${kin.relationship || "N/A"} \n
          email -> ${kin.email || "N/A"} \n
      `,
      html: `
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Namdrive Email</title>
        <style>
          li {
            padding: 0.6em 10px;
            border: 1px solid rgba(0, 0, 0, 0.3);
            margin: 0.2em 0;
            font-weight: bold;
            border-radius: 5px;
          }
        </style>
      </head>
      
      <body style="font-family: sans-serif;">
        <div style="max-width: 600px; margin: 0 auto;">
          <h1 style="text-align: center;">New Website Booking!</h1>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li style="font-size: 2em;">Client </li>
            <li>package: ${client.package}</li>
            <li>bookingDate: ${client.bookingDate}</li>
            <li>firstnames: ${client.firstnames}</li>
            <li>lastname: ${client.lastname}</li>
            <li>birthday: ${client.birthday}</li>
            <li>idNumber: ${client.idNumber}</li>
            <li>gender: ${client.gender}</li>
            <li>email: ${client.email}</li>
            <li>cellphone: ${client.cellphone}</li>
            <li>address: ${client.address}</li>
            <li>experience: ${client.experience}</li>
            <li style="font-size: 2em;">Next of kin </li>
            <li>firstnames: ${kin.firstnames || ""}</li>
            <li>lastname: ${kin.lastname || ""}</li>
            <li>cellphone: ${kin.cellphone || ""}</li>
            <li>idNumber: ${kin.idNumber || ""}</li>
            <li>title: ${kin.title || ""}</li>
            <li>relationship: ${kin.relationship || ""}</li>
            <li>email: ${kin.email || ""}</li>
          </ul>
          <h3 style="margin-bottom: 0;">Thank you</h3>
          <p style="margin-top: 0;"><small>Mail service by: Kaizen Media</small></p>
        </div>
      </body>
      </html>
      `
    };
    sgMail.send(msg);

    callback(null, {
      statusCode: 200,
      body: "success"
    });
  } catch (e) {
    callback(null, {
      statusCode: 500,
      body: JSON.stringify(e)
    });
  }
};
