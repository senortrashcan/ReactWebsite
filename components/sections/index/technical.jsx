// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Our Vision"
					preTitle="Future"
					subTitle="At Liquified Capital, we envision a world where decentralized finance is accessible to everyone, and where technology bridges the gap between traditional finance and the future of digital assets. We’re committed to advancing this vision by continuously innovating and enhancing our platform to meet the evolving needs of our users."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Commitment to Decentralization"
							icon={[ 'fat', 'chart-network' ]}
							copy="Our platform is built to support leading decentralized staking protocols, allowing you to retain full control over your assets while participating in the staking ecosystem."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="User-Friendly Experience" 
							copy="Our platform is designed with simplicity in mind, making it easy for both newcomers and experienced users to navigate and manage their staking activities."
							list={experience}
							block="experience" 
							fullContainer="fullContainer"
							icon="people"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Clear Transparency" 
							copy="We value open communication and provide straightforward information about our processes, performance, and fees, helping you make informed decisions."
							list={transparency} 
							block="transparency"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const experience = [
	{ key: 'terminal', 		name: 'Experience', 			type: 'fat' },
	{ key: 'handshake-simple', 	name: 'Simplicity', 		type: 'fat' },
]

const transparency	= [
	{ key: 'wand-magic-sparkles', 	name: 'find something', 		type: 'fat' },
]