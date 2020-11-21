/* Function name post_mentee_callback 
create new CallbackHistory
*/

export function post_mentee_update
    
    // Process request after validation and sanitization.
    (req, res, next)  {

        // Extract the validation errors from a request.

        // Create Mentee object with escaped and trimmed data (and the old id!)
        var mentee = new Mentee(
            {//user:req.user._id,mentor:req.params.id
                user:req.body.user,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                phone: req.body.phone,
                email:req.body.email,
                standard: req.body.standard,               
                coaching: req.body.coaching,
                category: req.body.category,
                subject:req.body.subject,               
                _id: req.params.id
            }
        );

           /* save it and send 200 status code */
        
    }






/* 2 Task */
export default function menteeValidator(req, res,next){
    // req.check('first_name').isLength({ min: 1 }).withMessage('First name must be specified.').trim(),
    // req.check('last_name').isLength({ min: 1 }).withMessage('last name must be specified.').trim(),
    //req.check('phone').optional().isInt(),
    req.check('coaching').isLength({ min: 1 }).withMessage('coaching name must be specified.').trim(),
    req.check('standard').isInt({ min:1,max:12}).withMessage('year/class should be in range of 1-12'),   
    req.check('category').isIn(['JEE', 'NEET','CAREER','DEVELOPMENT']).withMessage('category should be proper'),
    req.check('need_notes').optional().isBoolean(),
    req.check('subject').
    isIn(['PHYSICS','MATHS','CHEMESTRY','BIOLOGY','PCM','PCB']).withMessage('  must be specified from the given')

    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
     return next();
}

/* Like above create  menteeCallbackFormValidator */