'use client'

import { useGSAP } from '@gsap/react'
import { Dodecahedron, Float } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { useRef } from 'react'
import * as THREE from 'three'
import { FocusField } from './contact-form'

type ContactVoidSceneProps = {
    focusField: FocusField
    triggerFlash: boolean
}

function VoidObject({ focusField, triggerFlash }: ContactVoidSceneProps) {
    const meshRef = useRef<THREE.Mesh>(null)
    const spot1Ref = useRef<THREE.SpotLight>(null) // Name
    const spot2Ref = useRef<THREE.SpotLight>(null) // Email
    const spot3Ref = useRef<THREE.SpotLight>(null) // Message
    const flashRef = useRef<THREE.PointLight>(null) // Submit

    // Idle Rotation
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.1
            meshRef.current.rotation.y += delta * 0.15
        }
    })

    // Light Interaction Logic
    useGSAP(() => {
        const duration = 0.8
        const ease = "power2.inOut"
        const activeIntensity = 200

        // Reset all first
        const tl = gsap.timeline()

        if (focusField === 'name') {
            gsap.to(spot1Ref.current, { intensity: activeIntensity, duration, ease })
            gsap.to(spot2Ref.current, { intensity: 0, duration, ease })
            gsap.to(spot3Ref.current, { intensity: 0, duration, ease })
        } else if (focusField === 'email') {
            gsap.to(spot1Ref.current, { intensity: 0, duration, ease })
            gsap.to(spot2Ref.current, { intensity: activeIntensity, duration, ease })
            gsap.to(spot3Ref.current, { intensity: 0, duration, ease })
        } else if (focusField === 'message') {
            gsap.to(spot1Ref.current, { intensity: 0, duration, ease })
            gsap.to(spot2Ref.current, { intensity: 0, duration, ease })
            gsap.to(spot3Ref.current, { intensity: activeIntensity, duration, ease })
        } else {
            // No focus - fade all out
            gsap.to([spot1Ref.current, spot2Ref.current, spot3Ref.current], { 
                intensity: 0, 
                duration, 
                ease 
            })
        }

    }, [focusField])

    // Flash Effect
    useGSAP(() => {
        if (triggerFlash && flashRef.current) {
            const tl = gsap.timeline()
            tl.set(flashRef.current, { intensity: 0 })
            tl.to(flashRef.current, { intensity: 500, duration: 0.1, ease: "power4.out" })
            tl.to(flashRef.current, { intensity: 0, duration: 2, ease: "power2.out" })
        }
    }, [triggerFlash])

    return (
        <>
            {/* The Object */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Dodecahedron ref={meshRef} args={[1.5, 0]}>
                    <meshStandardMaterial 
                        color="#1a1a1a"
                        roughness={0.8}
                        metalness={0.2}
                    />
                </Dodecahedron>
            </Float>

            {/* Faint Rim Light (Always on, very subtle) */}
            <pointLight position={[-5, 5, -5]} intensity={5} color="#4a4a4a" />

            {/* Interactive Spotlights */}
            {/* 1. Top Left (Name) */}
            <spotLight 
                ref={spot1Ref}
                position={[-5, 5, 5]} 
                angle={0.5} 
                penumbra={1} 
                intensity={0} 
                color="#ffffff" 
                castShadow 
            />

            {/* 2. Top Right (Email) */}
            <spotLight 
                ref={spot2Ref}
                position={[5, 5, 5]} 
                angle={0.5} 
                penumbra={1} 
                intensity={0} 
                color="#ffffff" 
                castShadow 
            />

            {/* 3. Bottom Center (Message) */}
            <spotLight 
                ref={spot3Ref}
                position={[0, -5, 5]} 
                angle={0.5} 
                penumbra={1} 
                intensity={0} 
                color="#ffffff" 
                castShadow 
            />

            {/* Flash Light (Center) */}
            <pointLight 
                ref={flashRef}
                position={[0, 0, 2]} 
                intensity={0} 
                color="#ffffff" 
                distance={10}
                decay={2}
            />
        </>
    )
}

export function ContactVoidScene({ focusField, triggerFlash }: ContactVoidSceneProps) {
    return (
        <div className="absolute inset-0 z-0 bg-black">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <color attach="background" args={['#000000']} />
                <VoidObject focusField={focusField} triggerFlash={triggerFlash} />
            </Canvas>
        </div>
    )
}
