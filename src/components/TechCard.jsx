// eslint-disable-next-line react/prop-types
function TechCard({text, children}) {
  return (
    <article className='flex flex-col justify-center items-center p-5 rounded-lg mt-5'>
        {children}
        <h3 className='text-2xl font-medium'>{text}</h3>
    </article>
  )
}

export default TechCard
