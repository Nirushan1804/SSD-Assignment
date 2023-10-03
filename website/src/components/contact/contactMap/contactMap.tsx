import React from 'react';

function ContactMap () {
    return(
        <div className='flex ml-[auto] mr-[auto] justify-center '>
            <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126763.28938079151!2d79.70958609726566!3d6.848244100000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b0f757d621f%3A0xd9189e54ea38dfbe!2sDehiwala%20Beach!5e0!3m2!1sen!2slk!4v1691588224774!5m2!1sen!2slk"
      width="600"
      height="450"
      title="Google Map"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className='border-[15px] mb-[100px] rounded-[15px]'
    />
        </div>
    )
}

export default ContactMap;