"use strict";(self.webpackChunku_modeler_manual=self.webpackChunku_modeler_manual||[]).push([[1477],{30010:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"hello-umodeler","metadata":{"permalink":"/blog/hello-umodeler","source":"@site/i18n/en/docusaurus-plugin-content-blog/2024-02-16-hello-umodeler/2024-02-16-hello-umodeler.md","title":"Starting the UModeler blog","description":"This is the first post on UModeler.","date":"2024-02-16T00:00:00.000Z","formattedDate":"February 16, 2024","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"welcome","permalink":"/blog/tags/welcome"},{"label":"first","permalink":"/blog/tags/first"},{"label":"UModeler-X","permalink":"/blog/tags/u-modeler-x"},{"label":"UModeler","permalink":"/blog/tags/u-modeler"},{"label":"Unity","permalink":"/blog/tags/unity"},{"label":"Unity3D","permalink":"/blog/tags/unity-3-d"}],"readingTime":8.935,"hasTruncateMarker":true,"authors":[{"name":"Jaesik Hwang","title":"Head of UModeler Development","email":"Jaesik.H@umodeler.com","imageURL":"https://static.wixstatic.com/media/250891_b2b0d03187384b15b524e4b7fab08915~mv2.png","key":"jaesik"}],"frontMatter":{"title":"Starting the UModeler blog","description":"This is the first post on UModeler.","slug":"hello-umodeler","authors":"jaesik","tags":["hello","welcome","first","UModeler-X","UModeler","UModelerX","Unity","Unity3D"],"image":"https://docs.umodeler.com/img/512_umodeler_only_alpha.png","hide_table_of_contents":false}},"content":"![](./img/SpaceShip_Render_02.png)\\n\\nHello! I\'m very excited to start a blog like this. I was thinking about what to write for my first blog post, and I decided it would be interesting to talk about why we started developing UModeler X, the process we went through, and how we plan to develop it further, as this is something we haven\'t had many chances to discuss.\\n\\nThe reason I started developing UModeler X while the existing UModeler was receiving a lot of love from Unity developers is as follows:\\n\\n1. To allow for smooth editing of high-poly 3D data within the Unity editor.\\n2. To integrate all functions needed for 3D data creation, including modeling, rigging, painting, and sculpting, so that games can be made 100% within Unity.\\n3. To lay the groundwork for runtime solution development as well as editor solutions, aiming to develop new products for more 3D creators outside of Unity.\\n4. To allow creators to make various contents such as 3D worlds, games, items, and characters with UModeler X, and to support more creators\' creative activities with the results produced from here.\\n\\n## UModeler X Development Story\\n\x3c!-- truncate --\x3e\\n\\nUModeler X began its full-scale development in mid-2020, facing various technical and planning challenges. We overcame these challenges one by one to reach its current form. I will briefly introduce the development process.\\n\\n### In 2020\\n\\n- In 2020, the initial development focused on implementing an architecture that could quickly update the connectivity information between the elements of a mesh, such as vertices, edges, and faces. Additionally, we concentrated on ensuring that the visualization, selection, and movement of these mesh elements could be handled cleanly and swiftly. [The BMesh architecture from Blender](https://developer.blender.org/docs/features/objects/mesh/bmesh/) provided significant help in implementing this architecture. To verify performance, we conducted basic modeling tests such as element selection and movement using an 800,000 polygon Stanford Dragon mesh. The results confirmed that UModeler X could adequately edit high-poly models within Unity.\\n<div class=\\"text--center\\">\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/VDkCZsiGqt8?si=IUBPp5x9Hmwyss1e\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n</div>\\n- In addition to this, we introduced a command-based modular approach to increase work efficiency and significantly reduce the data size needed for Undo/Redo operations.\\n- We also added the ability to modify the original mesh (Source Mesh) without altering it by introducing modifiers (Modifier). The initial implementation of the Mirror, Subdivide, FFD, Shell, and Push modifiers has made modeling much easier and more efficient.\\n- We adopted the OpenSubdiv library to implement a subdivision (Subdivision) tool that directly converts low-quality, low-poly 3D data into high-quality, high-poly 3D data.\\n<div class=\\"text--center\\">\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/tJdEban56U0?si=Wob271mldoZLCPAj\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n</div>\\n\\n### In 2021\\n\\n- We introduced the [MVVM(Model-View-ViewModel)](https://learn.microsoft.com/ko-kr/dotnet/architecture/maui/mvvm) pattern to separate rendering, data, and actual implementation. Additionally, we upgraded the UI design to make it more sophisticated.\\n- We developed a solution that utilizes the GPU to select vertices, edges, and faces of high-poly meshes with high performance.\\n- We implemented various modeling-related features belonging to basic shapes (Primitive Shapes), Add, Remove, and Surface groups on top of the new architecture. \\n- We also implemented a built-in UV editor to enable UV unwrapping and editing.\\n- In the summer of 2021, we were able to create high-end 3D models that the original UModeler could not achieve, fully utilizing the features of UModeler X implemented up to that point.\\n![](./img/UModelerX-FirstDemoShots.png)\\n<div class=\\"text--center\\">\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/tv8-J1h6Msc?si=LmVNkZmfBPsX4HQV\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n</div>\\n- In UV editing, a new unwrapping feature using the LSCM (Least Squares Conformal Maps) algorithm was added, allowing complex meshes to be unfolded into 2D UV coordinates with minimal distortion by following the seams.\\n![](./img/UVEditor-LSCM.png)\\n- We finally implemented rigging for character animation. Now, not only can you create a skeleton structure, but you can also import and use an existing skeleton directly. Additionally, we implemented the Weight Transfer feature, which calculates weights based on the weights of another mesh. By fully utilizing the modeling features and rigging implemented up to that point, we were able to successfully create character items for the Zepeto metaverse, thereby verifying the performance of UModeler X.\\n<div class=\\"text--center\\">\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/1vmfEH6R_6Y?si=ozpW5XHL9HKOKBnu\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n</div>\\n\\n### In 2022\\n\\n- We continuously verified the capabilities of UModeler X by creating a demo that combined a cute character with a 2.5D proportion, made using UModeler X, with a background created using UModeler.\\n<div class=\\"text--center\\">\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/S1s8CWK0zO8?si=QEh0jUgMgH8aNhXM\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n</div>\\n- Developed a 3D painting mode that allows direct coloring on 3D models with a brush. This supports layers like Photoshop, and each layer can have Paint, Fill, and Sticker properties. 2D painting is also supported, making it possible to create textures in Unity, which was previously cumbersome.\\n  - **3D Painting Prototype**\\n<div class=\\"text--center\\">\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/dYMkU94AML8?si=TP_KAcqr4EoUgSTw\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n</div>\\n  - **First Version of 3D Painting**\\n<div class=\\"text--center\\">\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/g9W0eM9EBcU?si=uo_B3HiHZcPnPa_D\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n</div>\\n- Conducted more than three alpha tests targeting students learning Unity. Through this, we were able to receive a wide range of feedback and enhance the completeness of UModeler X.\\n- In 2022, a lot of time and effort were invested in adding new features, creating a stable and scalable system, and addressing technical debt. As a result, the existing command system, prefab, and tool usage workflows were significantly improved. Continuous testing led to the identification and resolution of many issues. While these improvements may not seem significant externally, they ultimately laid the groundwork for a stronger leap forward.\\n\\n### In 2023\\n\\n- **First Closed Beta (March 2023~)**\\n  - Conducted a closed beta for Zepeto creators. Zepeto uses Unity as a development studio for creators.\\n  - Launched a landing page in January and granted access to users who left their emails on March 29.\\n  - Although the number of people who actually used UModeler X was not as high as the number who applied, we were able to receive helpful feedback from real Zepeto creators, which greatly aided in improving UModeler X.\\n  - Improved rigging and export features to accommodate various body types of Zepeto.\\n![](./img/UModelerX-Zepeto-Test.png)\\n  - Opened [the Official UModeler X Manual Site](https://docs.umodeler.com/docs/intro), built using the Docusaurus solution.\\n- **Second Closed Beta (July 2023~)**\\n  - Held an invitation event. Invitations could be received either from someone who was already invited or by applying directly on the website. In retrospect, it might have been better not to conduct this event as part of a viral marketing strategy.\\n  - Began to inform existing UModeler users about UModeler X. We created a new UModeler X category in the UModeler Discord channel and simultaneously announced the news of UModeler X\'s second closed beta in communities where Unity developers are active.\\n  - Released the first demo video.\\n<div class=\\"text--center\\">\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/Mxfhrq3g_x0?si=RbUa3c9vFk6q4jJH\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n</div>\\n  - Released tutorial videos to help get started with UModeler X, serving as an excellent guide.\\n<div class=\\"text--center\\">\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/53rFgSVLwMM?si=T-b4cv15bQG1QlD-\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/--loU3ihpTc?si=fhsMLygydFCDso1_\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n</div>\\n  - Added an auto-rigging feature similar to the Mixamo concept. Setting guide points automatically generates a skeleton for human and quadruped meshes and assigns weights to vertices.\\n<div class=\\"text--center\\">\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/SgSUYtcIn4g?si=NkAPWJi9cnOtGFCs\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n</div>\\n  - Implemented AI texturing in collaboration with the game company [nerdystar](https://nerdystar.io/), working with Stable Diffusion + WebUI. This allows for direct projection of AI-generated images onto 3D models in the scene view, simplifying the cumbersome texture creation process.\\n![](./img/UModelerX-nerdystar-AI-texturing-1.gif)\\n![](./img/UModelerX-nerdystar-AI-texturing-2.gif)\\n- **Open Beta (September 2023~)**\\n  - From this point on, anyone can use UModeler X simply by signing up.\\n  - Released the second demo video.\\n<div class=\\"text--center\\">\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/qS8QNXDJfkU?si=K1Wu1slp63Yw_9hs\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n</div>\\n- Launched UModeler X on the Unity Asset Store. Now anyone can download UModeler Hub from the Asset Store and use UModeler X.\\n  - [UModeler X with AI-Texturing](https://assetstore.unity.com/packages/tools/modeling/umodeler-x-with-ai-texturing-254983)    \\n- Opened a course on [Unity\'s Official Online Learning Site (learn.unity.com)](https://learn.unity.com/project/getting-started-with-umodelerx) for getting started with UModeler X.\\n  - [Getting Started with UModelerX - Unity Learn](https://learn.unity.com/project/getting-started-with-umodelerx)\\n- Created a demo video showcasing the advantages of using UModeler X with Synty Studios\' assets in Unity, allowing for direct editing and animation.\\n<div class=\\"text--center\\">\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/NMYy8VcstUI?si=VJclM0DTiyuhEKOb\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n</div>\\n\\n## In the future\\n\\nOur goal with UModeler X is to upgrade the Unity editor, used by over 1.1 million people monthly, into an easier and more convenient tool for creating 3D content. If anyone using the Unity editor can fully unleash their imagination with UModeler X, the world will become more exciting and colorful. To achieve such a world, UModeler X will continue to develop and evolve without cease.\\n\\n### In 2024\\n\\nThis year, we plan to implement the sketch-based smart modeling that made the original UModeler special, into UModeler X as well. Also, hotspot texturing and the Curve editor are expected to be integrated into UModeler X soon. Additionally, AI Texturing version 2.0 is waiting for you. We are preparing many more features, so you can look forward to them.\\n\\n## Getting Started with UModeler X\\n\\nTo install UModeler X, you first need to install the Hub from the [Unity Asset Store](https://assetstore.unity.com/packages/tools/modeling/umodeler-x-with-ai-texturing-254983). This Hub is responsible for the installation and updating of UModeler X and allows for the download of other necessary assets. After running the Hub, create an account and log in to install UModeler X.\\n\\n<div class=\\"text--center\\">\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/rr8tbw3CRtk?si=ZHxFS3cfsDscdVL8\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n</div>\\nOnce the installation is complete, you can start using it right away by referring to the previously introduced UModeler X online manual.<br/>\\n\\n## Community and Support Channels\\n\\nIf you have any improvements, questions, or issues you\'d like to discuss while using UModeler X, try using the UModeler Discord server. You can receive direct feedback from developers or other UModeler X users there. You can also get the latest news about UModeler X on this server. Feel free to inquire through the UModeler Unity Forum or Email.\\n\\n- [UModeler Discord Server](https://discord.com/invite/VH4yR8R)\\n- [Unity UModeler Forum](https://forum.unity.com/threads/released-umodeler-x-model-rig-paint-and-ai-texture-within-unity-unity-vsp.462506/)\\n- contact.support@umodeler.com\\n\\n\\n## Resources\\n\\nFor the latest information, follow UModeler on [Twitter](https://twitter.com/docusaurus), [Facebook](https://www.facebook.com/umodeler), and [Instagram](https://www.instagram.com/_umodeler_/)."}]}')}}]);