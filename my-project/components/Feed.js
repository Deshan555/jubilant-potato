import Stories from "./Stories"

function Feed()
{
    return(

        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl max-auto">

            {/* 1. Section -> Stories and Posts*/}

            <section className="col-span-2">

                <Stories/>

            </section>

            {/*2. Section -> Mini Profiles and Suggestions*/}

            <section>

            </section>
        
        </main>
    )

}

export default Feed