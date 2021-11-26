import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-2">
      <Head>
        <title>DEVcase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen p-4 flex flex-col items-center justify-center">
        <h1 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-purple-600">Namaste</h1>
        <h1 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-600">Developers</h1>

        <p className="my-12 md:text-2xl md:w-10/12 text-gray-400 text-center">This is where code magicians can connect, showcase thier projects, and find new opportunities.</p>

        <div className="flex items-center flex-col md:flex-row">
          <button className="bg-gradient-to-br from-red-500 to-purple-600 py-4 px-8 rounded-full font-semibold text-xl md:mr-4 text-white">
            Register Now!
          </button>
          <button className="bg-gradient-to-br from-blue-500 to-green-600 py-4 px-8 rounded-full font-semibold text-xl my-2 md:ml-4 text-white">
            Learn More!
          </button>
        </div>
      </main>

      <main className="container min-h-screen p-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-purple-600 text-center">Experience the most rich feature social media for Developers</h1>

        <p className="my-12 md:text-2xl md:w-10/12 text-gray-400 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestias quae officia consequuntur doloremque quisquam voluptatem a! Ea, assumenda animi sed, exercitationem, aperiam optio minus quidem at dolorum error veniam!
          Non nostrum velit, neque nobis a, exercitationem ipsa odit blanditiis ut est, animi officiis cumque quos! Unde aspernatur laborum doloremque sequi cum aliquam amet ut voluptates, corporis molestias architecto repudiandae.
          Consequuntur mollitia rem doloribus eius animi nesciunt minima necessitatibus quae labore, dolor nemo non architecto iusto eos inventore at similique itaque sed doloremque quo eum explicabo libero corrupti tempora. Quam.
          Inventore illo asperiores hic at fuga esse minima voluptatibus, omnis autem eligendi eum odio harum quam voluptas, vero dolorem exercitationem doloremque provident ipsam temporibus reiciendis! Ducimus molestiae eos obcaecati asperiores?
          Reiciendis quidem error in nesciunt, minus obcaecati, ullam molestias similique laudantium perspiciatis suscipit illo! Obcaecati, quidem minima. Magnam placeat unde architecto eligendi sint dolorum in praesentium? Non sequi dolor mollitia!
          Quos dolore, numquam nesciunt nihil repudiandae placeat, magni provident necessitatibus nemo facere totam nobis inventore minima distinctio quae quidem impedit possimus eos? Praesentium sunt tenetur vitae optio, dolorum ad numquam!</p>

        <button className="bg-gradient-to-br from-red-500 to-purple-600 py-4 px-8 rounded-full font-semibold text-xl">
          Register Now!
        </button>
      </main>

    </div>
  )
}
