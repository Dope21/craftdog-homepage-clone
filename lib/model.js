import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function loaderGLTFModel(
  scene,
  glbPath,
  options = { receviveShadow: true, castShadow: true }
) {
  const { receviveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'dog'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = receviveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receviveShadow
          }
        })

        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}
