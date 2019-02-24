const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp();

exports.makeUpper = functions.database.ref('/messages/{pushId}/original')
    .onCreate((snapshot, context) => {
        const original = snapshot.val();
        console.log('Upper ', context.params.pushId, original);
        const upper = original.toUpperCase();
        return snapshot.ref.parent.child('upper').set(upper);
    });


// Adiciona a data de registro
exports.addCreatedField = functions.firestore.document('users/{userId}')
    .onCreate((snap, context) => {
        const newUser = snap.data();
        const name = newUser.name;
        return snap.ref.update({
            createdAt: (new Date()).toLocaleDateString('pt-br', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: '2-digit'
            })
        });
    });



    // A demo utiliza uma conta do Gmail para fazer isso.
    // Adicione aqui as credenciais da conta e irá funcionar
    // Se quiser fazer com outro provedor, veja a documentação do nodemailer em
    // https://nodemailer.com/smtp/
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '...',
            pass: '...'
        }
    });

    exports.enviarEmail = functions.https.onRequest((req, res) => {
        cors(req, res, () => {
            
            // e-mail destino
            const dest = req.query.dest;
    
            const mailOptions = {
                from: '...',
                to: dest,
                subject: '...',
                html: `...`
            };

            return transporter.sendMail(mailOptions, (err, info) => {
                if(err) {
                    return res.send(err.toString());
                }
                return res.send(`Mensagem enviada com sucesso. Id: ${info.messageId} | Response: ${info.response}`);
            });
        });
    });