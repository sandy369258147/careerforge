import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeCanvas3D({ className = '', variant = 'hero' }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 1000)
    camera.position.z = 24

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    // Interactive Talent Network (Nodes & Connections)
    const nodeCount = variant === 'hero' ? 65 : 35
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(nodeCount * 3)
    const originalPositions = new Float32Array(nodeCount * 3)
    const velocities = []

    const spread = variant === 'hero' ? 18 : 12

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * spread * 2
      const y = (Math.random() - 0.5) * spread * 1.5
      const z = (Math.random() - 0.5) * spread
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      originalPositions[i * 3] = x
      originalPositions[i * 3 + 1] = y
      originalPositions[i * 3 + 2] = z

      velocities.push({
        x: (Math.random() - 0.5) * 0.015,
        y: (Math.random() - 0.5) * 0.015,
        z: (Math.random() - 0.5) * 0.015,
      })
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    // Glowing Node Points (Career & Tech Talent nodes)
    const pMaterial = new THREE.PointsMaterial({
      color: 0x3e6d9e,
      size: 0.55,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    })
    const pointCloud = new THREE.Points(geometry, pMaterial)
    scene.add(pointCloud)

    // Connecting Lines Material
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x8facc3,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    })

    const lineGeo = new THREE.BufferGeometry()
    const lineMesh = new THREE.LineSegments(lineGeo, lineMaterial)
    scene.add(lineMesh)

    // 3D Polyhedral Floating Core (Represents structure, precision, engineering)
    const polyGeo = new THREE.IcosahedronGeometry(variant === 'hero' ? 6 : 4, 1)
    const polyMat = new THREE.MeshBasicMaterial({
      color: 0x224d87,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    })
    const polyMesh = new THREE.Mesh(polyGeo, polyMat)
    scene.add(polyMesh)

    // Outer orbital ring
    const ringGeo = new THREE.TorusGeometry(variant === 'hero' ? 8.5 : 5.5, 0.06, 16, 100)
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x3e6d9e,
      transparent: true,
      opacity: 0.35,
    })
    const ringMesh = new THREE.Mesh(ringGeo, ringMat)
    ringMesh.rotation.x = Math.PI / 3
    scene.add(ringMesh)

    const ring2Geo = new THREE.TorusGeometry(variant === 'hero' ? 10.5 : 7, 0.04, 16, 100)
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x8facc3,
      transparent: true,
      opacity: 0.25,
    })
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat)
    ring2Mesh.rotation.y = Math.PI / 4
    scene.add(ring2Mesh)

    // Mouse tracking with smooth damping
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const onMouseMove = (e) => {
      const rect = mount.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })

    // Resize handler
    const onResize = () => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)

    let animationFrameId
    let clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Smooth mouse follow
      targetX += (mouseX * 3 - targetX) * 0.05
      targetY += (mouseY * 3 - targetY) * 0.05

      // Polyhedron & rings rotation
      polyMesh.rotation.x = elapsedTime * 0.08
      polyMesh.rotation.y = elapsedTime * 0.12
      polyMesh.position.x = targetX * 0.5
      polyMesh.position.y = targetY * 0.5

      ringMesh.rotation.z = elapsedTime * 0.1
      ringMesh.rotation.x = Math.PI / 3 + targetY * 0.2
      ringMesh.rotation.y = targetX * 0.2

      ring2Mesh.rotation.z = -elapsedTime * 0.08
      ring2Mesh.rotation.x = targetY * 0.15
      ring2Mesh.rotation.y = Math.PI / 4 + targetX * 0.15

      // Update node positions gently
      const pos = geometry.attributes.position.array
      const linePositions = []

      for (let i = 0; i < nodeCount; i++) {
        pos[i * 3] += velocities[i].x
        pos[i * 3 + 1] += velocities[i].y
        pos[i * 3 + 2] += velocities[i].z

        // Bounce back within bounds
        const dX = pos[i * 3] - originalPositions[i * 3]
        const dY = pos[i * 3 + 1] - originalPositions[i * 3 + 1]
        const dZ = pos[i * 3 + 2] - originalPositions[i * 3 + 2]

        if (Math.abs(dX) > 1.8) velocities[i].x *= -1
        if (Math.abs(dY) > 1.8) velocities[i].y *= -1
        if (Math.abs(dZ) > 1.8) velocities[i].z *= -1

        // Connect nearby nodes
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = pos[i * 3] - pos[j * 3]
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1]
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2]
          const distSq = dx * dx + dy * dy + dz * dz

          if (distSq < 25) {
            linePositions.push(
              pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2],
              pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]
            )
          }
        }
      }

      geometry.attributes.position.needsUpdate = true

      lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))

      camera.position.x += (targetX * 0.8 - camera.position.x) * 0.03
      camera.position.y += (targetY * 0.8 - camera.position.y) * 0.03
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement)
      }
      geometry.dispose()
      pMaterial.dispose()
      lineGeo.dispose()
      lineMaterial.dispose()
      polyGeo.dispose()
      polyMat.dispose()
      ringGeo.dispose()
      ringMat.dispose()
      ring2Geo.dispose()
      ring2Mat.dispose()
      renderer.dispose()
    }
  }, [variant])

  return (
    <div
      ref={mountRef}
      className={`three-canvas-container ${className}`}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  )
}
